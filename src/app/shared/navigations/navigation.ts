

export const navigationDashboard= [
    {
        title    : 'Directorio',
        type     : 'link',
        url:'/directorio',
        activeLink:'active-bg',
    },  
    {
        title    : 'Red',
        type     : 'group',
        activeLink:'active-bg',
        url:'/red',
        children : [
            {
                title    : 'Agro',
                type     : 'item',
                icon     : 'assets/img/sidenav/agro.png',
                url      : '',
            },
            {
                title    : 'Alimentos y bebidas',
                type     : 'item',
                icon     : 'assets/img/sidenav/alimento-y-bebida.png',
                url      : '',
            },
            {
                title    : 'Animales y mascotas',
                type     : 'item',
                icon     : 'assets/img/sidenav/mascotas.png',
                url      : '/agro',
            },
            {
                title    : 'Papelerías',
                type     : 'item',
                icon     : 'assets/img/sidenav/papeleria.png',
                url      : '/agro',
            },
            {
                title    : 'Servicios públicos',
                type     : 'item',
                icon     : 'assets/img/sidenav/servicios-publicos.png',
                url      : '/agro',
            },
            {
                title    : 'Belleza y cuidado personal',
                type     : 'item',
                icon     : 'assets/img/sidenav/belleza.png',
                url      : '/agro',
            },
            {
                title    : 'Tecnología',
                type     : 'item',
                icon     : 'assets/img/sidenav/tecnologia.png',
                url      : '/agro',
            },
            {
                title    : 'Vehículos',
                type     : 'item',
                icon     : 'assets/img/sidenav/auto.png',
                url      : '/agro',
            },
        ]  
    },  

];
export const navigationSocialWork= [
    
    {
        title    : 'Labor social',
        activeLink:'active-bg',
        url:'/labor-social',
        children:[
            {
            text:'Publiguarne te escucha',
            description:'Ingresa a nuestro grupo',
            img:'assets/img/labor-social1.png',
            url:''
        },
            {
            text:'Perro chiwawa perdido',
            description:'+57365884742',
            img:'assets/img/labor-social2.png',
            url:''
        },

        
    ]
    }]
export const navigationClassified= [
    
    // {
    //     title    : 'Clasificados',
    //     activeLink:'active-bg',
    //     url:'/clasificados',
    //     children:[
    //         {
    //         text:'Bienes raices',
    //         description:'Lorem ipsu dolor',
    //         img:'assets/img/clasificados.png',
    //         url:''
    //     },
    //         {
    //         text:'Bienes raices',
    //         description:'Lorem ipsu dolor',
    //         img:'assets/img/clasificados.png',
    //         url:''
    //     },

        
    // ]
    // }
]
export const navigationEvents= [
    
    {
        title    : 'Eventos',
        type     : 'group',
        url:'',
        activeLink:'none',
        children : [
            {
                title    : 'Eventos',
                type     : 'item',
                icon     : 'assets/img/sidenav/evento.png',
                url:'/eventos',
                activeLink:'active-bg',
            },
            {
                title    : 'Calendario',
                type     : 'item',
                icon     : 'assets/img/sidenav/calendario.png',
                url:'/eventos/calendario',
                activeLink:'active-bg',
            }]  
    },  

];
export const navigationPodcasts= [
    
    {
        title    : 'Podcasts',
        type     : 'group',
        url:'',
        activeLink:'none',
        children : [
            {
                title    : 'Podcasts',
                type     : 'item',
                activeLink:'active-bg',
                icon     : 'assets/img/sidenav/radio.png',
                url:'/podcasts',
            },
           ]  
    },  

];
