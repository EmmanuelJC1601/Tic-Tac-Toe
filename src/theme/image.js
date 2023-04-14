const plugin=require('tailwindcss/plugin');

module.exports=plugin(function({addComponents,theme}){
    addComponents({
        ".icon":{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            "&_icon-o-outline":{
                backgroundImage: theme('backgroundImage.icon-o-outline'),
            },
            "&_icon-o":{
                backgroundImage: theme('backgroundImage.icon-o'),
            },
            "&_icon-restart":{
                backgroundImage: theme('backgroundImage.icon-restart'),
            },
            "&_icon-x-outline":{
                backgroundImage: theme('backgroundImage.icon-x-outline'),
            },
            "&_icon-x":{
                backgroundImage: theme('backgroundImage.icon-x'),
            },
            "&_logo":{
                backgroundImage: theme('backgroundImage.logo'),
            },
        }
    })
})