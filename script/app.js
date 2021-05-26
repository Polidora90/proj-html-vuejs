new Vue({
    el: "#app",
    data: {
        navbarLinks: [
            {
                text: "HOME", //sistemare maiuscolo tramite js
                link: "#" 
            },
            {
                text: "ABOUT",
                link: "#" 
            },
            {
                text: "SERVICE",
                link: "#" 
            },
            {
                text: "SHOWCASE",
                link: "#" 
            },
            {
                text: "BLOG",
                link: "#" 
            },
            {
                text: "CONTACT",
                link: "#" 
            }
        ],

        footerLinks: [
            {
                text: "Careers",
                link: "#"
            },
            {
                text: "News",
                link: "#"
            },
            {
                text: "Terms of Use",
                link: "#"
            },
            {
                text: "Privacy Projects",
                link: "#"
            },
            {
                text: "About",
                link: "#"
            },
            {
                text: "Contact",
                link: "#"
            }
        ],
        customerMail: ""
    },
    methods: {
        registerMail() {
            if(!this.customerMail || !this.customerMail.includes("@")) {
                alert("La tua mail non sembra corretta. Devi inserire almeno un carattere ed utilizzare il simbolo @")
            } else {
                alert("Benvenuto! Controlla la tua casella di posta, ti abbiamo inviato una mail!")
            }

            this.customerMail = "";
        }
    }
});