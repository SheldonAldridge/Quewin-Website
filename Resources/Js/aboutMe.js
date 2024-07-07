const heroImage = Vue.createApp({
  data() {
    return {
      heroImage: {
        QuweinImage:"./Resources/Images/Quewin Images/69543088-01f5-4102-9bde-d2420736d14d.jpg",
      },
    };
  },
});

heroImage.mount('#hero-image');

const aboutMe = Vue.createApp({
  data(){
    return{
      aboutMe:{
        professional:"I am a dedicated professional with an unwavering commitment to excellence in digital and graphic design. I strive to master my craft, always aiming to produce outstanding visual results that set me apart in the industry. My passion for continuous growth and development drives me to stay ahead of design trends and consistently exceed expectations. Whether working individually or as part of a team, I am devoted to delivering exceptional outcomes that not only meet but often surpass client expectations.",
        journey:"I began my artistic journey with traditional art, spending years honing my skills with pens, coloured pencils, sketch markers, paint, and ink. As my passion for art grew, I transitioned into the digital realm, starting with Autodesk SketchBook. From there, I expanded my expertise to Photoshop and explored animation through Procreate and FlipaClip. Each step of this journey has deepened my understanding and refined my abilities in digital and graphic design.",
        passion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      skills:{
        pens:"Pens",
        pensImage:"/Resources/Images/Skills_Images/Pen.png",
        pencil:"Pencils",
        pencilImage:"/Resources/Images/Skills_Images/Pencil.png",
        marker:"Markers",
        markerImage:"/Resources/Images/Skills_Images/Marker.png",
        paintbrush:"Paintbrush",
        paintbrushImage:"/Resources/Images/Skills_Images/paintbrush.png",
        ink:"Ink",
        inkImage:"/Resources/Images/Skills_Images/ink.png",
      }
    }
  }
});

aboutMe.mount('#aboutMe')

const skills = Vue.createApp({
  data(){
    return{
      skills:{
        pens:"Pens",
        pensImage:"/Resources/Images/Skills_Images/Pen.png",
        pencil:"Pencils",
        pencilImage:"/Resources/Images/Skills_Images/Pencil.png",
        marker:"Markers",
        markerImage:"/Resources/Images/Skills_Images/Marker.png",
        paintbrush:"Paintbrush",
        paintbrushImage:"/Resources/Images/Skills_Images/paintbrush.png",
        ink:"Ink",
        inkImage:"/Resources/Images/Skills_Images/ink.png",
        photoshop:"Adobe Photoshop",
        photoshopImage:"/Resources/Images/Skills_Images/Adobe Photoshop.png",
        sketchbook:"Autodesk Sketchbook",
        sketchbookImage:"/Resources/Images/Skills_Images/Autodesk Sketchbook -black-white.png",
        flipaclip:"FlipaClip",
        flipaclipImage:"/Resources/Images/Skills_Images/FlipaClip.png",
      }
    }
  }
})

skills.mount('#skills-set')