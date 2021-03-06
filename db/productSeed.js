const { client } = require("./client");
module.exports = productsSeed = [
    {
        name: "French Truck Coffee",
        description: "The balanced Colombian beans are blended with other seasonal coffees rotated frequently to create a vibrant blend as powerful as its namesake. Great for drip coffee or espresso.",
        price: 1400,
        quantity: 12,
        photo: "https://images.unsplash.com/photo-1558562330-b1d48824217d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwYmFnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]

    },
    {
        name: "Angel's Food Cake",
        description: "If you eat it, you'll grow wings",
        price: 1500,
        quantity: 5,
        photo:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/90e96872-f2aa-4564-befb-ebcffac92fd4/Derivates/5809bfb5-e7ae-4826-ad4a-93f191e489ea.jpg",
        type: ["baked goods"]
    },
    {
        name: "Chai Tea",
        description: "Aromatic and delicious, our chai mix is a unique blend of black tea, cinnamon, cardamom, cloves and honey.",
        price: 999,
        quantity: 100,
        photo:
            "https://imbibemagazine.com/wp-content/uploads/2019/10/chai-tea-iStock-67194691-crdt-GeloKorol.jpg",
        type: ["beverages"]
    },
    {
        name: "Chocolate Chip Cookies",
        description: "Would you like some cookie with your chocolate?",
        price: 700,
        quantity: 2,
        photo:
            "https://images.unsplash.com/photo-1584847801423-852691e41bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Cheesecake",
        description: "Is it cheese or is it cake?",
        price: 900,
        quantity: 4,
        photo:
            "https://www.dailynews.com/wp-content/uploads/2021/07/LDN-L-CHEESECAKE-0709-01.jpg?w=1395",

        type: ["baked goods"]
    },
    {
        name: "Blonde Roast",
        description: "Lightly roasted coffee that's soft, mellow and flavorful. Easy-drinking on its own and delicious with milk, sugar or flavored with vanilla, caramel or hazelnut.",
        price: 1000,
        quantity: 4,
        photo: "https://images.unsplash.com/photo-1495881674446-33314d7fb917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGJhZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Battlecreek Decaf",
        description: "Impress your guests with an after dinner drink that has all the flavor you'd want in a caffeinated coffee but won't keep you up all night! Pairs great with any dessert!",
        price: 1400,
        quantity: 20,
        photo: "https://images.unsplash.com/photo-1559056199-96c307526265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwYmFnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Sprinkle Donuts",
        description: "A classic cake donut, topped with frosting and sprinkles.",
        price: 800,
        quantity: 20,
        photo: "https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9udXRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Devil's Food Cake",
        description: "A chocolate lover's dream come true! Chocolate cake, filled with a chocolate center and topped with chocolate frosting. So good you'll grow horns!",
        price: 1200,
        quantity: 25,
        photo: "https://images.unsplash.com/photo-1623888884968-b5a895f882dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Gingerbread Cookies",
        description: "A holiday favorite! Cut into your favorite shape, and decorate as desired.",
        price: 1200,
        quantity: 22,
        photo: "https://images.unsplash.com/photo-1614034201480-bb46b1d1b05d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2luZ2VyYnJlYWQlMjBjb29raWVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Cinnamon Rolls",
        description: "Crispy on the outside, warm and gooey in the center. These cinnamon rolls are the perfect breakfast treat.",
        price: 950,
        quantity: 28,
        photo: "https://images.unsplash.com/photo-1609126979532-0f514232d1a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFrZWQlMjBnb29kc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Vanilla Cupcakes",
        description: "These classic vanilla cupcakes are perfect for any occasion! Add sprinkles, or a fun frosting to dress them up.",
        price: 1200,
        quantity: 25,
        photo: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwY2FrZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Red Velvet Cake",
        description: "A delicious red velvet cake, topped with cream cheese frosting.",
        price: 1500,
        quantity: 20,
        photo: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Apple Pie",
        description: "A fall favorite! Features locally grown apples and our secret spice blend.",
        price: 1400,
        quantity: 20,
        photo: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBwaWV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Mini Cherry Pies",
        description: "Your favorite cherry pie, but make it mini. Makes 4 mini pies. Best served hot with ice cream on top.",
        price: 1500,
        quantity: 20,
        photo: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5JTIwcGllfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Chocolate Brownie",
        description: "Warm and gooey on the inside. Dress them up by adding walnuts.",
        price: 950,
        quantity: 29,
        photo: "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJvd25pZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Candy Cookies",
        description: "A classic sugar cookie, topped with rainbow candy.",
        price: 1000,
        quantity: 30,
        photo: "https://images.unsplash.com/photo-1541717872011-9d16b87a5551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FuZHklMjBjb29raWVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Iced Coffee",
        description: "Cold Brew is made from our custom blend of beans grown to steep long and cold for a super-smooth flavor.",
        price: 1200,
        quantity: 80,
        photo: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlZCUyMGNvZmZlZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Matcha Green Tea Powder",
        description: "100% USDA Certified Organic Matcha Green Tea Powder - Pure Shade-Grown Green Tea Leaf Matcha Powder - Grown Without Pesticides or Harmful Fertilizers",
        price: 1895,
        quantity: 50,
        photo: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW4lMjB0ZWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "English Breakfast Tea",
        description: "Each sip of this beloved morning black tea unfolds to reveal the complexity of the high-grown full leaves. An elegant, time-honored classic that brings a royal nod to every cup.",
        price: 800,
        quantity: 60,
        photo: "https://images.unsplash.com/photo-1580666622398-d5bffc4c9051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0JTIwdGVhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Rooibos Tea",
        description: "Rooibos Tea, USDA Organic from My Red Tea. South African, 100% Pure, Single Origin, Natural, Farmer Friendly, GMO and Caffeine Free. Sustainably farmed.",
        price: 1500,
        quantity: 90,
        photo: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vaWJvc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Camomille Tea",
        description: "Time For Sleep: This herbal tea is made with whole chamomile flowers for a much sweeter rounder flavorful experience. The naturally soothing properties of chamomile come through both in the flavor and aroma for a relaxing experience.",
        price: 1200,
        quantity: 180,
        photo: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Ftb21pbGxlJTIwdGVhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Banana Bread",
        description: "A family favorite. Dress it up with chocolate chips or walnuts.",
        price: 950,
        quantity: 150,
        photo: "https://images.unsplash.com/photo-1617319610261-ea6c6594a646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hJTIwYnJlYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Lemon Loaf",
        description: "Sweet and tangy, but subtle lemon flavor.",
        price: 1400,
        quantity: 20,
        photo: "https://images.unsplash.com/photo-1598795164852-d2b5472d8bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjBjYWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Oatmeal Raisin Cookies",
        description: "Grandma's favorite! Slightly crispy on the outside, soft and chewy in the center.",
        price: 1200,
        quantity: 30,
        photo: "https://images.unsplash.com/photo-1587540217853-52034b3e6c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2F0bWVhbCUyMGNvb2tpZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Chocolate Cupcakes",
        description: "Dark chocolate cupcakes with vanilla frosting.",
        price: 1300,
        quantity: 45,
        photo: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Carrot Cake",
        description: "A classic carrot cake with a cream cheese frosting.",
        price: 1200,
        quantity: 58,
        photo: "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Blueberry Scone",
        description: "A traditional scone with blueberries, buttermilk and lemon.",
        price: 1000,
        quantity: 88,
        photo: "https://images.unsplash.com/photo-1589114471223-dec0d8d572c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NvbmVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Ginger Tea",
        description: "Ginger tea is a herbal beverage that is made from ginger root. It has a long history as a traditional herbal medicine in East Asia, South Asia, Southeast Asia and West Asia.",
        price: 1450,
        quantity: 80,
        photo: "https://images.unsplash.com/34/rcaNUh3pQ9GD8w7Iy8qE__DSC0940.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2luZ2VyJTIwdGVhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["beverages"]
    },
    {
        name: "Birthday Cake",
        description: "A classic white cake with mint frosting and sprinkles.",
        price: 1300,
        quantity: 50,
        photo: "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXklMjBjYWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        type: ["baked goods"]
    },
    {
        name: "Blackberry Macaroons",
        description: "Blackberry flavored with berry flavored buttercream and topped with white chocolate drizzle.",
        price: 1600,
        quantity: 50,
        photo: "https://images.unsplash.com/photo-1520352758561-fc3a6b70df81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwbWFjYXJvb25zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: ["baked goods"]
    },
    {
        name: "Peanut Butter Cookies",
        description: "These cookies are full of peanut butter flavor and have the perfect balance of salty and sweet.",
        price: 1350,
        quantity: 70,
        photo: "https://images.unsplash.com/photo-1573729405915-56f0b1a190a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVhbnV0JTIwYnV0dGVyJTIwY29va2llc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
        type: ["baked goods"]
    },
    {
        name: "Early Bird Coffee",
        description: "This light roast is crisp, bright, and complex with a subtle tartness of green apple & citrus, sweet caramel syrup body and a creamy milk chocolate finish. Scientifically proven to make you more productive, or whatever. Cheers!",
        price: 1600,
        quantity: 50,
        photo: "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYmFnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: ["beverages"]
    },
    {
        name: "Never Settle Coffee",
        description: "This comfortable, yet surprisingly complex and sophisticated coffee is approachable to all. It performs well on its own for the purist or with fats such as dairy or plant based beverages, making it a true answer for all coffee needs.",
        price: 1300,
        quantity: 50,
        photo: "https://images.unsplash.com/photo-1584736286279-5d85d32ba79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwYmFnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        type: ["beverages"]
    }

];

