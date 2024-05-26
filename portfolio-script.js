 document.getElementById('mobile-menu').addEventListener('click', function () {
            const navLinks = document.getElementById('nav-links');
            const brand = document.querySelector('.navbar a[href="portfolio.html"]');
            navLinks.classList.toggle('show');
            brand.classList.toggle('hidden');
        });

                 function loadVideo() {
                        const videoContainer = document.getElementById('video-container');
                        videoContainer.innerHTML = `
         <iframe src="https://www.youtube.com/embed/5XxFwtlYSR4?si=jSlC3kYB136LllPD" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
    `;
                    }

                      function loadVideo2() {
                            const videoContainer = document.getElementById('video-container2');
                            videoContainer.innerHTML = `
         <iframe src="https://www.youtube.com/embed/32JojlHFsso?si=zeQuf6ddoGJJG23f" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
    `;
                        }

                        function loadVideo3() {
                                const videoContainer = document.getElementById('video-container3');
                                videoContainer.innerHTML = `
          <iframe src="https://www.youtube.com/embed/qbjA2LUq464?si=cwIvPZ9aXTxQbFL5" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>

    `;
                            }

                            function loadVideo4() {
                                    const videoContainer = document.getElementById('video-container4');
                                    videoContainer.innerHTML = `
          <iframe src="https://www.youtube.com/embed/--VIzxBllLY?si=rFdW7jTXNVM1s1fM" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
    `;
                                }
