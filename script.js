document.addEventListener('DOMContentLoaded',()=>{
    // Navbar
    const navbar=document.getElementById('navbar');
    window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>50));
    // Hamburger
    const ham=document.getElementById('hamburger'),links=document.getElementById('navLinks');
    ham.addEventListener('click',()=>{ham.classList.toggle('active');links.classList.toggle('active')});
    links.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{ham.classList.remove('active');links.classList.remove('active')}));
    // Scroll animations
    const obs=new IntersectionObserver(e=>e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible')}),{threshold:0.1});
    document.querySelectorAll('.package-card,.review-card,.gallery-item,.c-card,.info-item').forEach(el=>{el.classList.add('fade-in');obs.observe(el)});
    // Booking form
    document.getElementById('bookingForm').addEventListener('submit',e=>{
        e.preventDefault();
        const d=Object.fromEntries(new FormData(e.target));
        d.id=Date.now();d.submittedAt=new Date().toISOString();d.status='New';
        const all=JSON.parse(localStorage.getItem('ks_bookings')||'[]');
        all.push(d);localStorage.setItem('ks_bookings',JSON.stringify(all));
        e.target.reset();showToast('✅ Booking submitted! We\'ll confirm shortly.');
    });
});
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000)}
