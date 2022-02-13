import bcrypt from 'bcryptjs';

const data= {
    users: [
       {
         name: 'mabuX',
         email: 'admin@example.com',
         password: bcrypt.hashSync('1234', 8),
         isAdmin: true,
       },
       {
          //customer
         name: 'John',
         email: 'user@example.com',
         password: bcrypt.hashSync('1234', 8),
         isAdmin: false,
       },
     ],
    products:[
        {
            name: "Naruto Pop Pin",
            category: "Funko Pop",
            image: "/images/Naruto_Pop_Pin.jpg",
            price: 900,
            countInStock: 150,
            character: "Naruto",
            rating: 5,
            numReview: 1798,
            description: "High quality product"
        }, 

        {
            name: "Itachi Funko Pop",
            category: "Funko Pop",
            image: "/images/Itachi_A.png",
            price: 1500,
            countInStock: 150,
            character: "Itachi",
            rating: 4,
            numReview: 1540,
            description: "High quality product"
        }, 

        {
            name: "Sasuke Funko Pop",
            category: "Funko Pop",
            image: "/images/Sasuke_A.png",
            price: 1500,
            countInStock: 150,
            character: "Sasuke",
            rating: 4.5,
            numReview: 1235,
            description: "High quality product"
        }, 

        {

            name: "Itachi Pop Pin",
            category: "Funko Pop",
            image: "/images/Itachi_Pop_Pin.png",
            price: 900,
            countInStock: 150,
            character: "Itachi",
            rating: 4,
            numReview: 963,
            description: "High quality product"
        }, 

        {
 
            name: "Minato Funko Pop",
            category: "Funko Pop",
            image: "/images/Minato_A.jpg",
            price: 2000,
            countInStock: 150,
            character: "Minato",
            rating: 5,
            numReview: 1278,
            description: "High quality product"
        }, 

        
        {
 
            name: "Sasuke Rinnegan",
            category: "Funko Pop",
            image: "/images/Sasuke_A.png",
            price: 2000,
            countInStock: 150,
            character: "Sasuke",
            rating: 4.5,
            numReview: 684,
            description: "High quality product"
        }, 

        {

            name: "Sasuke Pop Pin",
            category: "Funko Pop",
            image: "/images/Sasuke_Pop_Pin.png",
            price: 900,
            countInStock: 150,
            character: "Sasuke",
            rating: 4.5,
            numReview: 621,
            description: "High quality product"
        }, 

        {

            name: "Kurama Funko",
            category: "Funko Pop",
            image: "/images/Kurama_A.png",
            price: 2300,
            countInStock: 150,
            character: "Kurama",
            rating: 4.5,
            numReview: 1245,
            description: "High quality product"
        }, 

        {

            name: "Kabuto Funko",
            category: "Funko Pop",
            image: "/images/Kabuto_A.png",
            price: 1500,
            countInStock: 150,
            character: "Kabuto",
            rating: 4.5,
            numReview: 478,
            description: "High quality product"
        }, 

        {

            name: "Naruto Jacket",
            category: "Jacket",
            image: "/images/Naruto_Bomber.jpg",
            price: 2100,
            countInStock: 150,
            character: "Naruto",
            rating: 4,
            numReview: 2567,
            description: "High quality product"
        }, 

        {

            name: "Hokage Jacket",
            category: "Jacket",
            image: "/images/Naruto_Bomber_B.jpg",
            price: 2100,
            countInStock: 150,
            character: "Naruto",
            rating: 4,
            numReview: 2457,
            description: "High quality product"
        }, 

        {

            name: "Naruto Jacket B",
            category: "Jacket",
            image: "/images/Naruto_Bomber_C.jpg",
            price: 3000,
            countInStock: 150,
            character: "Naruto",
            rating: 4.5,
            numReview: 2321,
            description: "High quality product"
        }, 

        {

            name: "Naruto Jacket C",
            category: "Jacket",
            image: "/images/Naruto_Bomber_D.jpg",
            price: 3000,
            countInStock: 150,
            character: "Naruto",
            rating: 4.5,
            numReview: 2142,
            description: "High quality product"
        }, 

        {

            name: "Akatsuki Jacket",
            category: "Jacket",
            image: "/images/Akatsuki_Bomber.jpg",
            price: 2000,
            countInStock: 150,
            character: "Naruto",
            rating: 3.5,
            numReview: 2011,
            description: "High quality product"
        }, 

        {

            name: "Obito Jacket (W)",
            category: "Jacket",
            image: "/images/Obito_Jacket.jpg",
            price: 3000,
            countInStock: 150,
            character: "Obito",
            rating: 3.5,
            numReview: 3045,
            description: "High quality product"
        }, 
       
        {

            name: "Obito Jacket (B)",
            category: "Jacket",
            image: "/images/Obito_Jacket_B.jpg",
            price: 1500,
            countInStock: 150,
            character: "Obito",
            rating: 4.5,
            numReview: 2930,
            description: "High quality product"
        }, 
        {

            name: "Naruto Sage Mode",
            category: "Funko Pop",
            image: "/images/Sage_Funko_Pop.jpg",
            price: 3500,
            countInStock: 150,
            character: "Naruto",
            rating: 5,
            numReview: 742,
            description: "High quality product"
        }, 

        {

            name: "Naruto Headband",
            category: "Accesories",
            image: "/images/Naruto_Headband.jpg",
            price: 600,
            countInStock: 150,
            character: "Naruto",
            rating: 3,
            numReview: 1571,
            description: "High quality product"
        }, 
        {

            name: "Airpods Case A",
            category: "Accesories",
            image: "/images/Airpod_Case.jpg",
            price: 1800,
            countInStock: 150,
            character: "Naruto",
            rating: 4,
            numReview: 423,
            description: "High quality product"
        }, 

        {

            name: "Airpods Case B",
            category: "Accesories",
            image: "/images/Airpod_Case_B.jpg",
            price: 1800,
            countInStock: 150,
            character: "Naruto",
            rating: 4,
            numReview: 321,
            description: "High quality product"
        }, 
    ]
}
export default data;