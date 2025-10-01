
// Main interactions for the prototype
document.addEventListener('DOMContentLoaded', function(){
  // Mobile nav toggle
  var toggle = document.getElementById('mobile-toggle');
  if(toggle){
    toggle.addEventListener('click', function(){
      var nav = document.querySelector('.main-nav');
      if(nav.style.display === 'block') nav.style.display = '';
      else nav.style.display = 'block';
    });
  }

  // Simple login handler (client-side demo)
  var loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Inicio de sesión (demo): ' + (document.getElementById('email').value || '—'));
    });
  }

  // Contact form demo
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Formulario enviado (demo). Gracias, ' + (document.getElementById('name').value || 'cliente') + '!');
      contactForm.reset();
    });
  }

  // Chatbot toggle and demo
  var chatToggle = document.getElementById('chat-toggle');
  var chatWindow = document.getElementById('chat-window');
  var chatForm = document.getElementById('chatForm');
  var chatBody = document.getElementById('chat-body');
  if(chatToggle && chatWindow){
    chatToggle.addEventListener('click', function(){
      if(chatWindow.classList.contains('open')){
        chatWindow.classList.remove('open');
        chatWindow.setAttribute('aria-hidden','true');
      } else {
        chatWindow.classList.add('open');
        chatWindow.setAttribute('aria-hidden','false');
      }
    });
  }
  if(chatForm){
    chatForm.addEventListener('submit', function(e){
      e.preventDefault();
      var input = document.getElementById('chatInput');
      var txt = input.value.trim();
      if(!txt) return;
      var div = document.createElement('div');
      div.className = 'user';
      div.textContent = txt;
      chatBody.appendChild(div);
      // simple bot reply
      var bot = document.createElement('div');
      bot.className = 'bot';
      bot.textContent = 'Gracias por tu mensaje. Un asesor te contactará pronto (demo).';
      chatBody.appendChild(bot);
      input.value = '';
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }
});
