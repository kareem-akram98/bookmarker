
var entryNumber =document.getElementById("entryNumber")
var projectCode =document.getElementById("projectCode")
var totalCost =document.getElementById("totalCost")
var poNumber =document.getElementById("poNumber")
var alertBox = document.getElementById('boxMsg')
var closeBtn = document.getElementById('closeBtn')

var project =[]

if (localStorage.getItem('linkContainer') !== null) {
    project = JSON.parse(localStorage.getItem('linkContainer')) 
    displayData()
}

function addBtn(){
    var link = {
        Entry : entryNumber.value ,
        projectCode : projectCode.value ,
        cost : totalCost.value ,
        po : poNumber.value ,
    }

    // if (nameRegex.test(link.name)&&urlRegex.test(link.linkSaved))
    // {
        project.push(link)
        localStorage.setItem('linkContainer', JSON.stringify(project))
        displayData()
        clearData()
        // console.log(project)
        console.log('hi');
        
    // } else {
    //     alertBox.classList.remove('d-none')
    //     console.log('bye');
    // }
}


function visitBtn(indexItem) {
    var webSite = project[indexItem].linkSaved
    window.open(`https://${webSite}`);
}


function clearData() {
    siteName.value =null;
    siteURL.value =null;
}


function displayData() {
    var cartona =''
    for ( i = 0; i < project.length; i++) {
        // console.log(project[i].name);
        cartona+= `
        <tr>
        <td>${i+1}</td>
        <td>${project[i].Entry}</td>
        <td>${project[i].projectCode}</td>
        <td>${project[i].cost}</td>
        <td>${project[i].po}</td>
        <td><button onclick='deletaLink(${i})' class="btn btn-delete"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
         </tr>        `
    } 
    document.getElementById('tableData').innerHTML = cartona
}


function deletaLink(indexItem) {
    // console.log(indexItem);
    project.splice(indexItem , 1)
    localStorage.setItem('linkContainer', JSON.stringify(project))
    displayData()
    // console.log(project);
}


function closeAlert() {
    alertBox.classList.add('d-none');
}


// const urlRegex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;
// const nameRegex = /^[a-zA-Z]{3,}$/;


// function typing(input,regx) {
//     if (regx.test(input.value))
//         {
//             input.classList.add('is-valid')
//             input.classList.remove('is-invalid')
            
//         } else {
            
//             input.classList.add('is-invalid')
//             input.classList.remove('is-valid')
//                     }
// }