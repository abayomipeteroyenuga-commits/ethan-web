
const b=document.querySelector('.menu'), n=document.querySelector('nav'); if(b)b.onclick=()=>n.classList.toggle('open');
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault(); const m=f.querySelector('.formmsg'); if(m)m.textContent='Thank you. Your enquiry has been prepared. Please also contact Ethan Digital Academy by WhatsApp or email for immediate follow-up.';}));
