        const imageFiles = [
            {
                nome: "FotoComPlaca", 
                titulo: "Fabio no congresso", 
                descricao: "Foto que trouxe o primeiro aluno."
            },
            {
                nome: "primeiroTitulo", 
                titulo: "Cristiane campeã", 
                descricao: "Registro do momento da vitória."
            },
            {
                nome: "SegundoTitulo", 
                titulo: "Cristiane Bi-Campeã", 
                descricao: "Ferramentas de desenvolvimento."
            },
            {
                nome: "Festival", 
                titulo: "Primeiro festival", 
                descricao: "Primeiro festival do badminton ZN."
            },
            {
                nome:"CobExpo",
                titulo: "Cob EXPO",
                descricao: "Nosso fundador, Fabio, representando a associação na COB EXPO 2025!"
            },
            {
                nome:"pascoaHavana",
                titulo: "Patrocínio HAVANA",
                descricao: "Um dia de muito esporte e celebração! Agradecemos de coração ao nosso patrocinador, HAVANA, por acreditar no nosso projeto e apoiar nossos atletas."
            },
            {
                nome:"sescSantana",
                titulo: "Vivência Sesc Santana",
                descricao: "Dia de levar o Parabadminton aos alunos da Diretoria de Ensino Norte 2"
            },
        ];
        
        document.addEventListener('DOMContentLoaded', () => {
            const galeriaContainer = document.getElementById('galeria-container');
            const modal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const modalCaption = document.getElementById('modalCaption');
            const downloadBtn = document.getElementById('downloadBtn');
            const fecharBtn = document.querySelector('.fechar');

            // -------------------------------------------------------------
            // 2. FUNÇÃO DE GERAÇÃO DINÂMICA
            // -------------------------------------------------------------
            function generateGalleryItem(item) {
                //estrutura ideal, mais otimizada
                // const itemHtml = `
                //     <div class="item-galeria">
                //         <img src="images/${item.nome}-min.jpg" 
                //             data-src="images/${item.nome}-max.jpg" 
                //             alt="${item.titulo}">
                //         <div class="legenda">
                //             <h3>${item.titulo}</h3>
                //             <p>${item.descricao}</p>
                //         </div>
                //     </div>
                // `;
                const itemHtml = `
                    <div class="item-galeria">
                        <img src="images/${item.nome}.jpeg" 
                            data-src="images/${item.nome}.jpeg" 
                            alt="${item.titulo}">
                        <div class="legenda">
                            <h3>${item.titulo}</h3>
                            <p>${item.descricao}</p>
                        </div>
                    </div>
                `;
                return itemHtml;
            }

            // 3. INJETAR O HTML NO CONTAINER
            let galleryHTML = '';
            imageFiles.forEach(item => {
                galleryHTML += generateGalleryItem(item);
            });
            galeriaContainer.innerHTML = galleryHTML;

            // -------------------------------------------------------------
            // 4. FUNÇÕES DO MODAL (As mesmas da resposta anterior)
            // -------------------------------------------------------------
            const galeriaItems = document.querySelectorAll('.item-galeria');

            galeriaItems.forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    const legendaTitulo = item.querySelector('.legenda h3').textContent;
                    const legendaDescricao = item.querySelector('.legenda p').textContent;

                    const imageUrl = img.getAttribute('data-src') || img.src; 
                    
                    modalImage.src = imageUrl;
                    modalCaption.textContent = `${legendaTitulo} - ${legendaDescricao}`;
                    
                    downloadBtn.href = imageUrl; 
                    downloadBtn.download = `${legendaTitulo.replace(/\s/g, '_')}_HR.jpg`; 

                    modal.classList.add('ativo'); 
                    document.body.style.overflow = 'hidden'; 
                });
            });

            const closeModal = () => {
                modal.classList.remove('ativo');
                document.body.style.overflow = '';
            };

            fecharBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && modal.classList.contains('ativo')) {
                    closeModal();
                }
            });
        });