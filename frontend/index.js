buttonUpload = document.getElementById("submit");
buttonUpload.addEventListener("click", async () => {
    
});

document.addEventListener('DOMContentLoaded', () => {
  const f1 = document.querySelector('form.form');
  const f2 = document.querySelector('form.form2');

  if (!f1 || !f2) return;

  f1.addEventListener('submit', async (e) => {
    e.preventDefault(); // bloque l’envoi réel

    const data = Object.fromEntries(new FormData(f1).entries());
    console.log('Mock submit — données non sauvegardées :', data);

    const btn = f1.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Test…'; }

    await new Promise((r) => setTimeout(r, 600));

    f1.classList.add('hidden');
    f2.classList.remove('hidden');

    f1.reset();
    if (btn) { btn.disabled = false; btn.textContent = 'Téléversement'; }
  });
});


    