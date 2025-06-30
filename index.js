window.addEventListener('keydown',e=>{
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
   console.log(audio);
   if(audio===null)return;
   audio.play();
   audio.currentTime=0;
   const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
   
   key.classList.add("playing");
})
const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');

        console.log(e);
      });
    });