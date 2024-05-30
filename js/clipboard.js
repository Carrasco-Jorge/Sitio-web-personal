async function copy_to_clipboard(value,msg,lang) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(value);
  
    // Alert the copied text
    if(lang > 0) {
        alertify.alert(
            msg + " copiado al portapapeles.", 
            function(){alertify.message('OK');}
        );
    }
    else {
        alertify.alert(
            msg + " copied to clipboard.", 
            function(){alertify.message('OK');}
        );
    }

  }