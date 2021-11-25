document.addEventListener("click", (e) => {
    if (e.target.id != "btn_b64_encode" && e.target.id != "btn_b64_decode" && e.target.id != "btn_url_encode" && e.target.id != "btn_url_decode"){
      return;
    }

    if (e.target.id === "btn_b64_encode"){
        document.getElementById("encode_text").value = window.btoa(document.getElementById("decode_text").value);
    }

    if (e.target.id === "btn_b64_decode"){
        document.getElementById("decode_text").value = window.atob(document.getElementById("encode_text").value);
    }
  
    if (e.target.id === "btn_url_encode"){
        document.getElementById("encode_text").value = window.encodeURIComponent(document.getElementById("decode_text").value);
    }

    if (e.target.id === "btn_url_decode"){
        document.getElementById("decode_text").value = window.decodeURIComponent (document.getElementById("encode_text").value);
    }
  });
