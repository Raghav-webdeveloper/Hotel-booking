import logo from "./logo.png";
import searchicon from "./searchicon.png";
import usericon from "./usericon.png";
import calendraicon from "./calendraicon.png";
import locationicon from "./locationicon.png";
import stariconfilled from "./stariconfilled.png";
import arrowicon from "./arrowicon.png"
import instagramicon from "./instagramicon.png";
import facebookicon from "./facebookicon.png";
import Xicon from "./Xicon.png";
import linkendinicon from "./linkendinicon.png";
import freewifiicon from "./freewifiicon.png";
import freebreakfasticon from "./freebreakfasticon.png";
import roomserviceicon from "./roomserviceicon.png";
import mountainicon from "./mountainicon.png";
import poolicon from "./poolicon.png";
import homeicon from "./homeicon.png";
import closeicon from "./closeicon.png";
import locationfilledicon from "./locationfilledicon.png";
import hearticon from "./hearticon.png";
import badgeticon from "./badgeticon.png";
import menuicon from "./menuicon.png";
import closemenuicon from "./closemenuicon.png";
import guestsicon from "./guestsicon.png";
import roomImg1 from "./roomImg1.png";
import roomImg2 from "./roomImg2.png";
import roomImg3 from "./roomImg3.png";
import roomImg4 from "./roomImg4.png";
import roomImg5 from "./roomImg5.png";
import regImg from "./regImg.png";
import exclusivecardimg1 from "./exclusivecardimg1.png";
import exclusivecardimg2 from "./exclusivecardimg2.png";
import addicon from "./addicon.png";
import dashboardicon from "./dashboardicon.png";
import listicon from "./listicon.png";
import totalbookingicon from "./totalbookingicon.png";
import totalrevenueicon from "./totalrevenueicon.png";
import testimonial1 from "./testimonial1.png";
import testimonial2 from "./testimonial2.png";
import testimonial3 from "./testimonial3.png";
import Bookicon from "./Bookicon.png";
import stariconOutlined from "./stariconOutlined.png"


export const assets={
 logo,
 searchicon, 
 usericon,
 calendraicon,
 locationicon,
 stariconfilled, 
 arrowicon,
 instagramicon, 
 facebookicon,
 Xicon,
 linkendinicon,  
 freewifiicon, 
 freebreakfasticon, 
 roomserviceicon, 
 mountainicon,
 poolicon, 
 homeicon, 
 closeicon,
 locationfilledicon,
 hearticon, 
 badgeticon,
  menuicon, 
 closemenuicon, 
 guestsicon, 
 roomImg1,
 roomImg2,
 roomImg3,
 roomImg4,
 roomImg5,
 regImg, 
 exclusivecardimg1,
 exclusivecardimg2,
 addicon,
 dashboardicon, 
 listicon,
 totalbookingicon, 
 totalrevenueicon, 
 Bookicon,
 stariconOutlined,
    
}

export const cities=[
     "New delhi",
     "Mumbai",
     "indore",
     "Bangalore"
];

// exclusive offer dummy data
export const exclusiveoffers=[
    {_id:1, title:"Summer Escape Package", description:"Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate:"Aug 31", image:exclusivecardimg1},
    {_id:2, title:"Romantic Gateway", description:"Special couples package including spa treatment", priceOff: 20, expiryDate:"Sep 20", image:exclusivecardimg2},
]

//Testimonials Dummy data
export const testimonials=[
  
  
    {id:1,Name:"Tarang Raghav",address:"Moradabad",image:testimonial1 ,rating:5,review:"“I had a wonderful stay at this hotel. The rooms were spacious, clean, and very comfortable, while the staff was extremely friendly and helpful throughout my stay. The atmosphere was peaceful, the service was excellent, and everything was well maintained. Overall, it was a great experience and I would definitely love to stay here again.”"},

    {id:2,Name:"Kabir bhatia",address:"Mumbai",image:testimonial2 ,rating:4,review:"I was thoroughly impressed with the quality of service and professionalism throughout my stay. The room was well-appointed, the facilities were excellent, and the staff maintained a high standard of hospitality. Everything was efficiently managed, making the entire experience comfortable and hassle-free. I would certainly consider staying here again on my future visits."},

    {id:3,Name:"Vikram Mehra",address:"noida",image:testimonial3 ,rating:5,review:"I had a beautiful and memorable stay at this hotel. The room was clean, cozy, and thoughtfully maintained, providing a comfortable space to relax and enjoy my time. The peaceful atmosphere, attentive staff, and excellent service made my stay even more special. I truly enjoyed the experience and would love to come back again."},

];

//Facility icons

export const Facilityicons={
    "Free WiFi": assets.freewifiicon,
    "Free Breakfast": assets.freebreakfasticon,
    "Room service": assets.roomserviceicon,
    "Mountain View": assets.mountainicon,
    "Pool Access": assets.poolicon,
};

//for room details page
export const roomcommondata=[
    {icon: assets.homeicon,title:"Clean & safe stay",description:"A well-maintained and hygienic space just for you"},
    {icon:assets.badgeticon,title:"Enhanced Cleaning", description:"This host follows strict cleaning standards."},
    {icon:assets.locationfilledicon,title:"Excellent Location",description:"90% of guests rated location 5stars."},
    {icon:assets.hearticon,title:"Smooth Check-in", description:"100% of guests gave check-in a 5-star rating."},
];
//hotel dummy data
export const hotelDummydata=
    {
    "id" : '67545454ap56565e565b72',
    "name" :"Tarang Raghav",
    "address":"Main Road 123 Street,23 Colony",
    "contact":"+910000000000",
    "owner":"user_raghav4565554556aaaaa",
    "city":"Noida",
    "createdAt": "2025-04-10T06:22:11.6632",
    "updatedAt": "2025-04-10T06:22:11.6632",
    "_v":0   
}

//Room Dummy data
export const roomDummydata=[
    {
        "id":"67545454ap56565e565b188",
        "hotel":hotelDummydata,
        "roomtype":"Double Bed",
        "pricePerNight":399,
        "amenities":["room service","Mountain view","Pool Access","Free WiFi"],
        "Images":[roomImg1,roomImg2,roomImg3,roomImg4,roomImg5],
        "isAvailable":true,
        "createdAt": "2025-04-10T06:26:04.6632",
         "updatedAt": "2025-04-10T06:22:11.6632",
         "_v":0
        
        },
    
        {
           "id":"67545454ap56565e56e75u057",
            "hotel":hotelDummydata,
            "roomtype":"Double Bed",
            "pricePerNight":299,
            "amenities":["room service","Mountain view","Pool Access","Free WiFi"],
            "Images":[roomImg2,roomImg5,roomImg3,roomImg1,roomImg4],
            "isAvailable":true,
            "createdAt": "2025-04-10T06:25:22.6632",
            "updatedAt": "2025-04-10T06:25:22.6632",
            "_v":0
        
        },
        
     {
           "id":"67545454ap56565e56e75u2412",
            "hotel":hotelDummydata,
            "roomtype":"Double Bed",
            "pricePerNight":249,
            "amenities":["room service","Mountain view","Pool Access","Free WiFi"],
            "Images":[roomImg5,roomImg1,roomImg4,roomImg2,roomImg3],
            "isAvailable":true,
            "createdAt": "2025-04-10T06:24:06.2852",
            "updatedAt": "2025-04-10T06:24:06.2852",
            "_v":0
        
        },
         {
           "id":"67545454ap56565e56e75u9999",
            "hotel":hotelDummydata,
            "roomtype":"Single Bed",
            "pricePerNight":199,
            "amenities":["room service","Mountain view","Pool Access","Free WiFi"],
            "Images":[roomImg5,roomImg1,roomImg4,roomImg2,roomImg3],
            "isAvailable":true,
            "createdAt": "2025-04-10T06:24:06.2852",
            "updatedAt": "2025-04-10T06:24:06.2852",
            "_v":0
        
        },
        
]

//User Dummy data
export const userDummydata={
     "_id":"user_2unjd5JUDFH565Ghgbgh7ghwjuP",
     "username": "Prince Raghav",
     "email":"user.raghav@gmail.com",
     "image":"./testimonial1",
     "Role":"hotelowner",
     "createdAt": "2025-03-25T06:29:16.3672",
     "updatedAt": "2025-04-10T06:34:48.2852",
     "_v":1,
     "recentSearchedCities":[
        "Noida"
     ]

}

//User Booking Dummy data
export const userBookingDummydata=[
    {
        "_Id":"65t545e5455a56455rfg55a",
        "user":userDummydata,
        "room":roomDummydata[1],
        "hotel":hotelDummydata,
        "CheckInDate":"2025-04-30T00:00:00:000Z",
        "CheckOutDate":"2025-05-01T00:00:00:000Z",
        "totalPrice":299,
        "guests":1,
        "status":"pending",
        "paymentMethod":"stripe",
        "isPaid":true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "_v":0
    },
    {
         "_Id":"69t545e5455a56455hyf755a",
        "user":userDummydata,
        "room":roomDummydata[0],
        "hotel":hotelDummydata,
        "CheckInDate":"2025-04-27T00:00:00:000Z",
        "CheckOutDate":"2025-04-20T00:00:00:000Z",
        "totalPrice":399,
        "guests":1,
        "status":"pending",
        "paymentMethod":"Pay at Hotel",
        "isPaid":false,
        "createdAt": "2025-04-11T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:43:54.873Z",
        "_v":0
    },
    {
         "_Id":"69t545e884a56455gghy55a",
        "user":userDummydata,
        "room":roomDummydata[3],
        "hotel":hotelDummydata,
        "CheckInDate":"2025-04-11T00:00:00:000Z",
        "CheckOutDate":"2025-05-12T00:00:00:000Z",
        "totalPrice":199,
        "guests":1,
        "status":"pending",
        "paymentMethod":"Pay at Hotel",
        "isPaid":false,
        "createdAt": "2025-04-12T06:42:01.529Z",
        "updatedAt": "2025-04-11T06:43:54.520Z",
        "_v":0
    }
]