 // FAQ Toggle Functionality
        function toggleFAQ(index) {
            const faqItems = document.querySelectorAll('.faq-item');
            const currentItem = faqItems[index];
            const answer = currentItem.querySelector('.faq-answer');
            const icon = currentItem.querySelector('.faq-icon');
            
            // Close all other FAQ items
            faqItems.forEach((item, i) => {
                if (i !== index) {
                    item.querySelector('.faq-answer').classList.remove('active');
                    item.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ item
            answer.classList.toggle('active');
            const isActive = answer.classList.contains('active');
            icon.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        // Smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe feature sections
        document.querySelectorAll('.feature-text, .feature-visual').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        console.log("MyStream - Educational streaming platform demo");
        console.log("This is a learning project demonstrating modern web development techniques.");
        console.log("No affiliation with any real streaming service.");