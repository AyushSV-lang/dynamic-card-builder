const Form=document.querySelector('form')
const inpName=document.querySelector('#Name')
const inpStatus=document.querySelector('#Status')
const inpBio=document.querySelector('#Bio')
const inpOption=document.querySelector('#Option')
const formBtn=document.querySelector('#formCard')
const wrapper=document.querySelector('.card_wrapper')




let previewName=document.querySelector('.info>h3')
let previewStatus=document.querySelector('.info>p')
let previewBio=document.querySelector('.card>p')
let previewImg=document.querySelector('.imgbox>img')

const pN=previewName.textContent
const pB=previewBio.textContent
const pS=previewStatus.textContent



let cardArr=JSON.parse(localStorage.getItem('card')) || []




function loader(){
    wrapper.innerHTML=''

    cardArr.forEach((cardData,index)=>{
        createCard(cardData,index)
    })
}





function createCard(cardData,index){
    const card=document.createElement('div')
    card.classList.add('card')

    const imgInfo=document.createElement('div')
    imgInfo.classList.add('img_info')
    card.append(imgInfo)

    const imgBox=document.createElement('div')
    imgBox.classList.add('imgbox')
    imgInfo.append(imgBox)

    const Img=document.createElement('img')
    if(cardData.cardGender==='Male'){
        Img.src='https://static.vecteezy.com/system/resources/thumbnails/032/176/197/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg'
    }else if(cardData.cardGender==='Female'){
        Img.src='https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg'
    }
    imgBox.append(Img)

    const Info=document.createElement('div')
    Info.classList.add('info')
    imgInfo.append(Info)

    const H3=document.createElement('h3')
    H3.textContent=cardData.cardName
    let cardName=H3.textContent
    Info.append(H3)

    const InfoP=document.createElement('p')
    InfoP.textContent=cardData.cardStatus
    let cardStatus=InfoP.textContent
    Info.append(InfoP)

    const cardP=document.createElement('p')
    cardP.textContent=cardData.cardBio
    let cardBio=cardP.textContent
    card.append(cardP)

    const del=document.createElement('button')
    del.classList.add('delete')
    del.textContent='Delete'
    del.dataset.index=index
    card.append(del)

    wrapper.append(card)

    
}




function reset(){
    inpName.value=''
    inpBio.value=''
    inpStatus.value=''
    inpOption.value='Male'

    previewName.textContent=pN
    previewBio.textContent=pB
    previewStatus.textContent=pS
    previewImg.src='https://static.vecteezy.com/system/resources/thumbnails/032/176/197/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg'
    
}

wrapper.addEventListener('click',(e)=>{
   if(e.target.classList.contains('delete')){
    const indextoDelete=e.target.dataset.index
    cardArr.splice(indextoDelete,1)
    localStorage.setItem('card',JSON.stringify(cardArr))
    loader()
   }else return
   
    
})

inpName.addEventListener('input',()=>{
    previewName.textContent=inpName.value
})

inpBio.addEventListener('input',()=>{
    previewBio.textContent=inpBio.value
})

inpStatus.addEventListener('input',()=>{
    previewStatus.textContent=inpStatus.value
})

inpOption.addEventListener('change',()=>{
    if(inpOption.value==='Male'){
        previewImg.src='https://static.vecteezy.com/system/resources/thumbnails/032/176/197/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg'
    }else if(inpOption.value==='Female'){
        previewImg.src='https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg'
    }
})

Form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let obj={
        cardName:inpName.value,
        cardStatus:inpStatus.value,
        cardBio:inpBio.value,
        cardGender:inpOption.value
    }


    cardArr.push(obj)
    localStorage.setItem('card',JSON.stringify(cardArr))
    loader()
            reset()
            
})

loader()