const buyPenetrationTop=document.querySelector(".buy-penetration-top"),threeSection=document.querySelector(".three-section"),questionnaireBtn=(buyPenetrationTop.addEventListener("click",function(){console.log(threeSection),window.scrollTo({top:threeSection.offsetTop-100,behavior:"smooth"})}),document.querySelector(".questionnaire-btn")),popupDisabledQuestionnaireBtn=document.querySelector(".popup-disabled-questionnaire-btn");let isTimeout=!1,config,questionnaireIsActive=!0;async function getConfig(){let e=await fetch("./files/config.json?nocache="+(new Date).getTime());e.ok&&(config=await e.json())}function QuestionnaireBtnEnableEvent(){questionnaireBtn.addEventListener("click",function(){config.questionnaireIsActive?window.open("https://discord.gg/YX7ehWtKHW"):isTimeout||(popupDisabledQuestionnaireBtn.classList.remove("hidden"),isTimeout=!0,setTimeout(()=>{popupDisabledQuestionnaireBtn.classList.add("hidden"),isTimeout=!1},3e3))})}window.addEventListener("load",function(){getConfig().then(()=>{config.questionnaireIsActive||questionnaireBtn.classList.add("disabled"),QuestionnaireBtnEnableEvent()})});