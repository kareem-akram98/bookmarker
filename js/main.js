
var siteName =document.getElementById("siteName")
var siteURL =document.getElementById("siteURL")
var alertBox = document.getElementById('boxMsg')
var closeBtn = document.getElementById('closeBtn')

var linkList =[]

if (localStorage.getItem('linkContainer') !== null) {
    linkList = JSON.parse(localStorage.getItem('linkContainer')) 
    displayData()
}

function addBtn(){
    var link = {
        name : siteName.value ,
        linkSaved : siteURL.value ,
    }

    if (nameRegex.test(link.name)&&urlRegex.test(link.linkSaved))
    {
        linkList.push(link)
        localStorage.setItem('linkContainer', JSON.stringify(linkList))
        displayData()
        clearData()
        // console.log(linkList)
        console.log('hi');
        
    } else {
        alertBox.classList.remove('d-none')
        console.log('bye');
    }
}


function visitBtn(indexItem) {
    console.log(linkList[indexItem].linkSaved);
    window.open(linkList[indexItem].linkSaved);
}


function clearData() {
    siteName.value =null;
    siteURL.value =null;
}


function displayData() {
    var cartona =''
    for ( i = 0; i < linkList.length; i++) {
        // console.log(linkList[i].name);
        cartona+= `
        <tr>
        <td>${i+1}</td>
        <td>${linkList[i].name}</td>
        <td><button onclick='visitBtn(${i})' class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
        <td><button onclick='deletaLink(${i})' class="btn btn-delete"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
         </tr>        `
    } 
    document.getElementById('tableData').innerHTML = cartona
}


function deletaLink(indexItem) {
    // console.log(indexItem);
    linkList.splice(indexItem , 1)
    localStorage.setItem('linkContainer', JSON.stringify(linkList))
    displayData()
    // console.log(linkList);
}


function closeAlert() {
    alertBox.classList.add('d-none');
}


const urlRegex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
const nameRegex = /^[a-zA-Z]{3,}$/;


function typing(input,regx) {
    if (regx.test(input.value))
        {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
        } else {
            
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
        }
}