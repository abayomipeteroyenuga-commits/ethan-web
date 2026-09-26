
const b=document.querySelector('.menu'), n=document.querySelector('nav'); if(b)b.onclick=()=>n.classList.toggle('open');
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault(); const m=f.querySelector('.formmsg'); if(m)m.textContent='Thank you. Your enquiry has been prepared. Please also contact Ethan Digital Academy by WhatsApp or email for immediate follow-up.';}));

const cs=document.getElementById('courseSearch'), filters=document.querySelectorAll('.filter'), cc=[...document.querySelectorAll('.course-card')];
let activeCat='All';
function filterCourses(){if(!cc.length)return;const q=(cs?.value||'').toLowerCase();cc.forEach(c=>{const okCat=activeCat==='All'||c.dataset.cat===activeCat;const okQ=!q||c.dataset.name.includes(q)||c.dataset.cat.toLowerCase().includes(q);c.style.display=okCat&&okQ?'block':'none';});}
if(cs)cs.addEventListener('input',filterCourses);
filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));b.classList.add('active');activeCat=b.dataset.filter;filterCourses();}));

// Ethan Digital Academy — WhatsApp request delivery
const ETHAN_WHATSAPP = '2348064656499';

document.querySelectorAll('form[data-whatsapp-request="true"]').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const fields = [...form.querySelectorAll('input, select, textarea')]
      .filter(el => el.type !== 'submit' && el.type !== 'button' && el.type !== 'file' && el.type !== 'checkbox' && el.value.trim())
      .map(el => `${el.name || el.placeholder || 'Information'}: ${el.value.trim()}`);

    const title = form.closest('section')?.querySelector('h1,h2,h3')?.textContent?.trim() || 'Website Request';
    const message = [
      '*ETHAN DIGITAL ACADEMY*',
      '*New Website Request*',
      '',
      `Request Type: ${title}`,
      ...fields,
      '',
      'Submitted through ethandigitalacademy.org'
    ].join('\n');

    const url = `https://wa.me/${ETHAN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    const msg = form.querySelector('.formmsg');
    if (msg) msg.textContent = 'Opening WhatsApp with your completed request. Please tap Send in WhatsApp to deliver it.';
    window.open(url, '_blank', 'noopener,noreferrer');
  });
});
