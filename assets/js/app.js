// $(document).ready(function(){

//     if(screen.width >= 780){

//         const cardId = document.querySelector('#firstProject');
//         const cardId2 = document.querySelector('#secondProject');
//         const cardId3 = document.querySelector('#thirdProject');
        
//         cardId.addEventListener('mousemove', (e) =>{
//             let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
//             let yAxis = (window.innerHeight / 2 - e.pageY) / 45 ;
//             cardId.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//         });
    
//         cardId.addEventListener('mouseleave', (e) =>{
//             cardId.style.transition = 'all 0.5s ease';
//             cardId.style.transform = `rotateY(0deg) rotateX(0deg)`;
//         });
    
//         cardId.addEventListener('mouseenter', (e) =>{
//             cardId.style.transition = 'none';
//         });
    
    
//         //Second Card
//         cardId2.addEventListener('mousemove', (e) =>{
//             let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
//             let yAxis = (window.innerHeight / 2 - e.pageY) / 45 ;
//             cardId2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//         });
    
//         cardId2.addEventListener('mouseleave', (e) =>{
//             cardId2.style.transition = 'all 0.5s ease';
//             cardId2.style.transform = `rotateY(0deg) rotateX(0deg)`;
//         });
    
//         cardId2.addEventListener('mouseenter', (e) =>{
//             cardId2.style.transition = 'none';
//         });
    
    
//         //Third Card
//         cardId3.addEventListener('mousemove', (e) =>{
//             let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
//             let yAxis = (window.innerHeight / 2 - e.pageY) / 45 ;
//             cardId3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//         });
    
//         cardId3.addEventListener('mouseleave', (e) =>{
//             cardId3.style.transition = 'all 0.5s ease';
//             cardId3.style.transform = `rotateY(0deg) rotateX(0deg)`;
//         });
    
//         cardId3.addEventListener('mouseenter', (e) =>{
//             cardId3.style.transition = 'none';
//         });
//     } else
//     {
//         return;
//     }
// });