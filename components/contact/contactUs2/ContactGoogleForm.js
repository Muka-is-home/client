
import React, { useEffect } from 'react'

export function GoogleForm() {
  useEffect(() => {
    var script = document.createElement("script");
     script.id = "ff-script";
     script.src = "https://formfacade.com/include/111311275041374859601/form/1FAIpQLSfX8rlB5h8cDNRN9DdBHfJdl27TQzRNWIjyO4B7TGTbFT9z5g/classic.js?div=ff-compose";
     script.defer = true;
      script.async = true;
      document.body.appendChild(script);
  }, [])
  return (
    <div id="ff-compose"></div>
  )
}
