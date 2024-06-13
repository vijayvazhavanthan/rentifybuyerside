import {rentify} from '../js/rentify-details.js';
import {save} from '../js/common.js';
import {view,changeviewtype} from '../js/common.js';
import {anotherTimeSave,anotherTimesaved,viewbutton,savelength} from '../js/commonfunction.js';

let three_dots='no';


document.querySelector('.js-threedots').addEventListener('click',()=>{
    console.log('hi')
    if(three_dots === 'no'){
        document.querySelector('.js-no-display').innerHTML=``;
        let html = `
            <div class="other-details">
                <div class="others-details-text">
                    Home
                </div>
                <div class="others-details-text">
                    About
                </div>
            </div>

        `;
         document.querySelector('.js-other-details').innerHTML=html;
         three_dots = 'yes';
    }else{
        let html = ` `;
        document.querySelector('.js-other-details').innerHTML=html;
        three_dots = 'no';
        document.querySelector('.js-no-display').innerHTML=`
            <div class="filter">
                <div class="filter-option ">
                    <div class="js-filter filter-text">
                        <div style="display:flex; justify-content: center; align-items: center;">
                            <img style="width:16px; margin-right:6px;" src="../rentify-images/filter.png">
                            Filter
                        </div>
                    </div>
                    <div class="js-option">
                        <!--js-filter-option show or not-->
                    </div>
                </div>
            </div>
        `;
        filtershow();
    } 
});



document.querySelector('.js-threedot').addEventListener('click',()=>{
    console.log('hi')
    if(three_dots === 'no'){
        document.querySelector('.js-no-display').innerHTML=``;
        let html = `
            <div class="other-details">
                <div class="others-details-text">
                    Home
                </div>
                <div class="others-details-text">
                    About
                </div>
            </div>

        `;
         document.querySelector('.js-other-details').innerHTML=html;
         three_dots = 'yes';
    }else{
        let html = ` `;
        document.querySelector('.js-other-details').innerHTML=html;
        three_dots = 'no';
        document.querySelector('.js-no-display').innerHTML=`
            <div class="filter">
                <div class="filter-option ">
                    <div class="js-filter filter-text">
                        <div style="display:flex; justify-content: center; align-items: center;">
                            <img style="width:16px; margin-right:6px;" src="../rentify-images/filter.png">
                            Filter
                        </div>
                    </div>
                    <div class="js-option">
                        <!--js-filter-option show or not-->
                    </div>
                </div>
            </div>
        `;
        filtershow();
    } 
});






let filter_option='no';

function filtershow(){
    document.querySelector('.js-filter').addEventListener('click',()=>{
        if(filter_option === 'no'){
            let html = `
            <div class="options">   
                          <div>
                            <div style="display: flex;">
                                <input class="text1 js-text1" type="text" placeholder="District">
                                <input class="text1 js-text2" style="margin-left:10px;" type="text" placeholder="State" >
                            </div> 
                            <div style="display: flex; margin-top:10px;">
                                <input class="text1 js-text3" type="text" placeholder="Rent or Sale">
                                <input class="text1 js-text4"style="margin-left:10px;" type="text" placeholder="Price">
                            </div> 
                            <div style="display: flex; margin-top:10px; justify-content: center;">
                                <button class="search js-search">
                                    <img class="search-image" src="../rentify-images/search.svg">
                                    Search
                                    <!--<div class="search-tooltip">Search</div>-->
                                </button>
                            </div>    
                </div>
            </div>
    
            `;
             document.querySelector('.js-option').innerHTML=html;
             filter_option = 'yes';
             filteroperation();
        }else{
            let html = ` `;
            document.querySelector('.js-option').innerHTML=html;
            filter_option = 'no';
        } 
    });
    
}

filtershow();


let loginopacity = 'no';

document.querySelector('.js-header-login').addEventListener('click',()=>{
    if(loginopacity === 'no'){
        let html = `
        <div class="login-side" style="background-color:rgba(255, 255, 255, 0.299);">
            <div class="buyer-tooltip">
                <a href="../save.html">
                        <div class="save-image">
                            <img class="header-save-image" src="../rentify-images/—Pngtree—line icon save_5784773.png">
                            <div class="save-total js-save-total">
                                <div class="save-total-number ">
                                                ${save.length}
                                </div>
                            </div>   
                        </div>
                    </a>
            </div>
            <div class="seller-tooltip">
                <div class="header-login" style="margin:0px;" >
                    <img class="header-save-image" style="width:30px; height:30px; margin:0px;" src="../rentify-images/user.png">
                     
                </div>
            </div>
        </div>  
        `;
         document.querySelector('.js-loginopacity').innerHTML=html;
         loginopacity = 'yes';
    }else{
        let html = ` `;
        document.querySelector('.js-loginopacity').innerHTML=html;
        loginopacity = 'no';
    } 
});



let html = '';

document.querySelector('.js-main-rentify-details').innerHTML = html;

rentify.forEach((rentify)=>{

    html += `<div class="flex-rentify" id="${rentify.userid}">
                <div class="rentifydetail">
                    <div class="rentify-image">
                            <img class="images" src="../rentify-images/${rentify.image}">
                    </div>
                    <div class="rentify-details">
                        <img class="location" src="../rentify-images/pngwing.com.png">
                        <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                        <div class="some-details">
                            <div class="some-detail">
                                <img style="width:12px;margin-right:8px;" src="../rentify-images/double-bed.png">
                                  Bedroom : ${rentify.bedroom}
                            </div>
                            <div class="dots">
                                .
                            </div>
                            <div class="some-detail">
                                <img style="width:12px;margin-right:8px;" src="../rentify-images/shower.png">
                                  Bath : ${rentify.bathroom}
                            </div>
                        </div>
                        <div class="design-line">

                        </div>
                        <div class="amount">
                            $ ${rentify.price}/-
                        </div>
                        <div>
                            <button class="save js-save"  data-rentify-id="${rentify.userid}">Save</button>
                            
                            <button class="view js-view-button" data-rentify-id="${rentify.userid}"  data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                            
                        </div>
                    </div>
                </div>
            </div>
    `;
    document.querySelector('.js-main-rentify-details').innerHTML = html;
});


anotherTimeSave(1);

function filteroperation(){
    document.querySelector('.js-search').addEventListener('click',()=>{

        html='';
    
        let district = document.querySelector('.js-text1').value;
        let state = document.querySelector('.js-text2').value;
        let rentify_type = document.querySelector('.js-text3').value;
        let price= document.querySelector('.js-text4').value;
        
        document.querySelector('.js-main-rentify-details').innerHTML = html;
    
        let no_item = 'yes';
    
        rentify.forEach((rentify)=>{    
            if(district.toLowerCase()===rentify.district.toLowerCase()&&state.toLowerCase()===rentify.state.toLocaleLowerCase() && rentify_type.toLowerCase()===rentify.housetype.toLowerCase() && Number(price)===rentify.price){
                console.log('hlo');
                    html +=`<div class="flex-rentify" id="${rentify.userid}">
                                <div class="rentifydetail">
                                    <div class="rentify-image">
                                            <img class="images" src="../rentify-images/${rentify.image}">
                                    </div>
                                    <div class="rentify-details">
                                        <img class="location" src="../rentify-images/pngwing.com.png">
                                        <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                                        <div class="some-details">
                                            <div class="some-detail">
                                                <img style="width:12px;margin-right:8px;" src="../rentify-images/double-bed.png">
                                                Bedroom : ${rentify.bedroom}
                                            </div>
                                            <div class="dots">
                                                .
                                            </div>
                                            <div class="some-detail">
                                                <img style="width:12px;margin-right:8px;" src="../rentify-images/shower.png">
                                                Bath : ${rentify.bathroom}
                                            </div>
                                        </div>
                                        <div class="design-line">
    
                                        </div>
                                        <div class="amount">
                                            $ ${rentify.price}/-
                                        </div>
                                        <div>
                                            <button class="save js-save"  data-rentify-id="${rentify.userid}">Save</button>
                                             
                                            <button class="view js-view-button" data-rentify-id="${rentify.userid}" data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                                           
                                        </div>
                                    </div>
                                </div>
                        </div>
                    `;
                    no_item = 'no';
            }
            document.querySelector('.js-main-rentify-details').innerHTML = html;
        })
    
        if(no_item==='yes'){
            html=`No related item`;
            document.querySelector('.js-main-rentify-details').innerHTML = `
                <div>
                    ${html}
                </div>
            `;
        }
    
        document.querySelector('.js-text1').value='';
        document.querySelector('.js-text2').value='';
        document.querySelector('.js-text3').value='';
        console.log(html);
        anotherTimeSave(1);
        anotherTimesaved();
        viewbutton(view);
        let icnor = ` `;
        document.querySelector('.js-option').innerHTML=icnor;
        filter_option = 'no';
    });
    
}

console.log(save);



anotherTimesaved();

document.querySelector('.js-save-total').innerHTML=`${save.length}`;


viewbutton(view);

changeviewtype();