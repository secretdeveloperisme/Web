
    function toast({title,message,type,duration}){
        const main = document.getElementById("toast");
        var toast = document.createElement("div");
        var icon = {success : "fas fa-check-circle",
                    error : "fas fa-exclamation-circle"};
        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon[type]}"></i>
                    </div>
                    <div class="toast__body">
                        <h2 class="body__title">
                            ${title}
                        </h2>
                        <p class="body__msg">
                            ${message}
                        </p>
                    </div>
                    <div class="toast__close">
                        &times;
                    </div> 
        `; 
        var delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast","toast--"+type);
        toast.style.animation =`slideInLeft 1s linear forwards,fadeOut 1s linear ${delay}s forwards`;
        main.appendChild(toast);

        var t = setTimeout(()=>main.removeChild(toast),duration+1000);
        toast.onclick = function(evt){
            if(evt.target.closest(".toast__close")){
                main.removeChild(toast);
                clearTimeout(t);
            }
        
        }
    }
    function toastSuccess(){
        toast({ title : "success",
            message: "ban da dang ki  thanh cong",
            type: "success",
            duration: 5000});
    }
    function toastError(){
        toast({ title : "error",
            message: "ban da dang ki chua thanh cong",
            type: "error",
            duration: 5000});
    }



