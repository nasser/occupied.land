let places = [
    "!4v1573401246750!6m8!1m7!1sxnpQSAxY1N6TYSLpToKfJg!2m2!1d31.84546011175961!2d35.22884082043012!3f69.38137487269081!4f-0.1479748158838703!5f0.9248775337287802",
    "!4v1573401018252!6m8!1m7!1s0B-mWLkiwLdAhwcgTAkU_Q!2m2!1d31.85185888134327!2d35.22517376174897!3f119.15950294871281!4f3.9021253002161274!5f0.7820865974627469",
    "!4v1573400336597!6m8!1m7!1siQF8kwljC20yEvAVzgWUKQ!2m2!1d31.90171075161962!2d35.22557797231715!3f121.8633693170311!4f-13.39588793138303!5f1.533760604652103",
    "!4v1573399596485!6m8!1m7!1s1Ojd-8FCHTLS6zoAbnQCNw!2m2!1d31.92725784657407!2d35.22156414381629!3f352.14097165877945!4f2.912457736835634!5f0.7820865974627469",
    "!4v1573399649599!6m8!1m7!1sfxcHmNCm6gPVOBdqz8OVdQ!2m2!1d31.92909078649506!2d35.22100814729439!3f170.3828903106163!4f2.298118353020655!5f0.7820865974627469",
    "!4v1573396571179!6m8!1m7!1sYuzmJyyncKur3Ob-YwhYfA!2m2!1d32.16166918768621!2d35.06987938528978!3f165.83611485105482!4f11.35206863634555!5f0.7820865974627469",
    "!4v1569195917403!6m8!1m7!1sPqZsvBOCaHd-OknPGkrSkQ!2m2!1d32.28044677108381!2d35.0390795170714!3f251.01!4f-19.53!5f0.5970117501821992",
    "!4v1570540576405!6m8!1m7!1s6yyrS5kZSM6SHzzD1mm8EQ!2m2!1d31.76833228596988!2d35.25211261822329!3f30.746056748656535!4f11.269999999999996!5f0.5970117501821992",
    "!4v1565567368190!6m8!1m7!1seOMdg9S2EmxcIUo--e3HBQ!2m2!1d31.84490310185735!2d35.24136271393742!3f282.6211435806927!4f9.810087027115685!5f1.2758723196556558",
    "!4v1565567437002!6m8!1m7!1s0SFSKYdu6LYRL9FRr2N7Xg!2m2!1d32.400639603216!2d35.49501556198575!3f180.71!4f5.049999999999997!5f0.5970117501821992",
    "!4v1570540795845!6m8!1m7!1sdmQr7mJepotvnDKafUl9HA!2m2!1d32.18965119666079!2d34.95661504876219!3f44.62638374552346!4f3.576827800816673!5f1.6903628858170476",
    "!4v1570541121957!6m8!1m7!1spXQwX20sw5OCeR4hfZbGsA!2m2!1d31.81266088771157!2d35.24071151540774!3f34.88!4f7.6200000000000045!5f0.4000000000000002",
    "!4v1565567778255!6m8!1m7!1s-RMI8qcU2XCdpgT_0h-QNA!2m2!1d31.81572804937481!2d35.24240479674848!3f175.74!4f7.959999999999994!5f0.5970117501821992",
    "!4v1565568094169!6m8!1m7!1skvHAwMez7DFZBv3s9w6d7Q!2m2!1d32.08963312017205!2d35.38052727094964!3f20.95245053942996!4f1.7886048311602565!5f1.8659585377416632",
    "!4v1564079485349!6m8!1m7!1saqeu9QMuDEh0_gtGsgLIyw!2m2!1d32.08730661767618!2d35.26495863617338!3f283.1595934192253!4f-1.0399035789898647!5f1.0174945284730377",
    "!4v1565568472920!6m8!1m7!1srEE2aamqelWT1Flp7FApyg!2m2!1d31.58130501930685!2d35.4070869684991!3f104.9408296403567!4f8.2480619908372!5f0.7820865974627469",
    "!4v1565571494432!6m8!1m7!1s5ZXeWuEjy85MOe1BaxWiIw!2m2!1d31.92364713857063!2d35.22523785023105!3f50.19459808829205!4f17.32861859472041!5f1.0727752519297191",
    "!4v1564096346077!6m8!1m7!1sEkHCJuxeFthniDXDrcev1Q!2m2!1d31.89939057394144!2d35.22228274103016!3f266.8273298425367!4f-7.706153324977009!5f1.1713889757725244",
    "!4v1565571619899!6m8!1m7!1sjjphbaW5T9mfKCxFCBMxJw!2m2!1d32.19911756237823!2d35.00581682131819!3f356.85!4f1.8400000000000034!5f0.4000000000000002"
  ]
  
  let sequence = [places[0]]
  
  function randomItem() {
    if(sequence.length == 0) {
      sequence = newSequence();
    }
    return sequence.pop()
    
    // return places.pop()
  }
  
  function newSequence() {
    return shuffle(places.slice(0));
  }
  
  function goToAnotherPlace() {
    let place = randomItem();
    let url = "https://www.google.com/maps/embed?pb=" + place;
    console.log(place)
    document.querySelector("iframe").setAttribute("src", url);
  }
  
  function showAbout() {
    document.querySelector("#about").setAttribute("class", "invisible present")
    setTimeout(function() {
      document.querySelector("#about").setAttribute("class", "visible present")
    }, 0)
    
    setTimeout(function() {
      document.onclick = function() { hideAbout(); }
    }, 1001)
  }
  
  function hideAbout() {
    document.querySelector("#about").setAttribute("class", "invisible present")
    setTimeout(function() {
      document.querySelector("#about").setAttribute("class", "invisible absent")
      document.onclick = null
    }, 1001)
  }
  
  
  window.onload = function() {
    goToAnotherPlace();
    let curtain = document.querySelector("#curtain")
    setTimeout(function() {
      curtain.setAttribute("class", "invisible")
      setTimeout(function() {
        curtain.parentElement.removeChild(curtain);
      }, 500)
    }, 750)
  }

  function hideIntroduction() {
    let intro = document.querySelector('#introduction')
    intro.setAttribute('class', 'invisible')
    setTimeout(function() {
      intro.parentElement.removeChild(intro)
    }, 1500);
  }
  
  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }