import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/reduxdata";
import { selectCount } from "../redux/reduxdata";
import Single from "./single";
import './data.css';
import { useHistory } from "react-router-dom";
function Datas() {
    const Myfood = [

        {
            Albumid: 2,
            id: 1,
            key: "non-veg",
            name: "fish-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹140",
            rating: "4.3 / 5",
            url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 2,
            key: "non-veg",
            name: "nalli",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹120",
            rating: "4.4 / 5",
            url: "https://images.pexels.com/photos/9609846/pexels-photo-9609846.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 3,
            key: "non-veg",
            name: "chicken-curry",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹80",
            rating: "4.2 / 5",
            url: "https://images.pexels.com/photos/9567078/pexels-photo-9567078.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 4,
            key: "non-veg",
            name: "gril-chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹160",
            rating: "4.3 / 5",
            url: "https://images.pexels.com/photos/10949542/pexels-photo-10949542.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 5,
            key: "non-veg",
            name: "chicken-rice",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹120",
            rating: "4.1 / 5",
            url: "https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 6,
            key: "non-veg",
            name: "half-chicken biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹220",
            rating: "4.8 / 5",
            url: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 7,
            key: "non-veg",
            name: "chicken-bakoda",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹100",
            rating: "4.6 / 5",
            url: "https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 2,
            id: 8,
            key: "non-veg",
            name: "Aambur-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹160",
            rating: "4.8 / 5",
            url: "https://th.bing.com/th/id/OIP.k1g15jRTR974wZsbmoE1_QHaE7?pid=ImgDet&rs=1",
        },
        {
            Albumid: 2,
            id: 9,
            key: "non-veg",
            name: "Dindukal-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹140",
            rating: "4.7 / 5",
            url: "https://www.yummytummyaarthi.com/wp-content/uploads/2013/12/IMG_6300.jpg",
        },
        {
            Albumid: 2,
            id: 10,
            key: "non-veg",
            name: "gril-chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹100",
            rating: "4.6 / 5",
            url: "https://i.pinimg.com/originals/b9/f0/8f/b9f08fe75162eeeca4ffcfb55de581bb.jpg",
        },
        {
            Albumid: 3,
            id: 11,
            key: "chinese",
            name: "noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$70",
            rating: "4.7 / 5",
            url: "https://th.bing.com/th/id/OIP.-9e1c4vk6JLuh5BSF-P0nwAAAA?pid=ImgDet&rs=1",
        },
        {
            Albumid: 3,
            id: 12,
            key: "chinese",
            name: "crunch-noodle",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$160",
            rating: "4.5 / 5",
            url: "https://keepingitrelle.com/wp-content/uploads/2020/09/Cake-Noodles-8-scaled.jpg",
        },
        {
            Albumid: 3,
            id: 13,
            key: "chinese",
            name: "spicy chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$240",
            rating: "4.5 / 5",
            url: "https://s-media-cache-ak0.pinimg.com/736x/b9/56/67/b95667f86701908dc9df0379cb60574e.jpg",
        },
        {
            Albumid: 3,
            id: 14,
            key: "chinese",
            name: "special noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$110",
            rating: "4.6 / 5",
            url: "https://thecluttered.com/wp-content/uploads/2020/10/asian-noodles-salad-recipe-inspirational-asian-noodle-salad-of-asian-noodles-salad-recipe.jpg",
        },
        {
            Albumid: 3,
            id: 15,
            key: "chinese",
            name: "hot noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$130",
            rating: "4.8 / 5",
            url: "https://th.bing.com/th/id/OIP.5cLMmJIXZ0HLtNef_edtRgHaLH?pid=ImgDet&rs=1",
        },
        {
            Albumid: 3,
            id: 16,
            key: "chinese",
            name: "chinese chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.3 / 5",
            url: "https://th.bing.com/th/id/OIP.IeWyYIFeOtDqxLv6NyZ-MwHaFj?pid=ImgDet&rs=1",
        },
        {
            Albumid: 3,
            id: 17,
            key: "chinese",
            name: "crisp rice bowl",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$180",
            rating: "4.5 / 5",
            url: "https://th.bing.com/th/id/OIP.gT_4jz86hJBe-94jWgs8sQHaFj?pid=ImgDet&rs=1",
        },
        {
            Albumid: 3,
            id: 18,
            key: "chinese",
            name: "rice bowl",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.7 / 5",
            url: "https://i.pinimg.com/originals/b6/0c/f4/b60cf4909fc41bc48cc78131fc0645ad.jpg",
        },
        {
            Albumid: 3,
            id: 19,
            key: "chinese",
            name: "chinese chicken gravy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$310",
            rating: "4.9 / 5",
            url: "https://omnivorescookbook.com/wp-content/uploads/2021/04/210203_Chinese-Curry-Chicken_550.jpg",
        },
        {
            Albumid: 3,
            id: 20,
            key: "veg",
            name: "veg-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$120",
            rating: "4.3 / 5",
            url: "https://th.bing.com/th/id/OIP.F-4j8drnhHzSqs-gN_4MNQHaKX?pid=ImgDet&w=700&h=980&rs=1",
        },
        {
            Albumid: 4,
            id: 21,
            key: "western",
            name: "western-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$320",
            rating: 4.9 / 5,
            url: "https://th.bing.com/th/id/OIP.qVBQqAdjvVIEGCCNMCVdTQHaFG?pid=ImgDet&rs=1",
        },
        {
            Albumid: 4,
            id: 22,
            key: "western",
            name: "veg-pack",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$499",
            rating: "4.6 / 5",
            url: "https://th.bing.com/th/id/OIP.uI0gpoSSrxiFyuXzf9LlogHaFD?pid=ImgDet&rs=1",
        },
        {
            Albumid: 4,
            id: 23,
            key: "western",
            name: "half beef",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$420",
            rating: "4.7 / 5",
            url: "https://i.pinimg.com/originals/91/af/09/91af098eb2822eba544e3024fa6466e6.jpg",
        },
        {
            Albumid: 4,
            id: 24,
            key: "western",
            name: "burger",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$120",
            rating: "4.5 / 5",
            url: "https://th.bing.com/th/id/OIP.O1zyhigbsbiPS7d8wPjpGwHaHa?pid=ImgDet&rs=1",
        },
        {
            Albumid: 4,
            id: 25,
            key: "western",
            name: "noodles with chicken",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$180",
            rating: "4.4 / 5",
            url: "https://th.bing.com/th/id/OIP.TEzDCDmLY1VIsc5zePJdSAHaE8?pid=ImgDet&rs=1",
        },
        {
            Albumid: 4,
            id: 26,
            key: "western",
            name: "comman pack",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.3 / 5",
            url: "https://foodinlocal.com/wp-content/uploads/2020/09/western_food_big_boyz-800x533.jpg",
        },
        {
            Albumid: 4,
            id: 27,
            key: "western",
            name: "bread & egg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$70",
            rating: "4.6 / 5",
            url: "https://th.bing.com/th/id/R.fe8bbeafdab555eb208b1062dd721933?rik=quRen9FrJHfVdg&riu=http%3a%2f%2fcook.fnr.sndimg.com%2fcontent%2fdam%2fimages%2fcook%2ffullset%2f2013%2f5%2f21%2f0%2fCCKitchens_heroes-green-chile-western-ham-and-egg-sandwich-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix%2f1369161416290.jpeg&ehk=Y9z8%2bl64dh2FyNfby%2bbBhumSrgdSLfmGSTi72AmJmnk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        },
        {
            Albumid: 4,
            id: 28,
            key: "western",
            name: "seshwan noodles",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$190",
            rating: "4.7 / 5",
            url: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 4,
            id: 29,
            key: "western",
            name: "western-biriyani(s)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$120",
            rating: "4.3 / 5",
            url: "https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 4,
            id: 30,
            key: "western",
            name: "slice beef",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "$320",
            rating: "4.6 / 5",
            url: "https://images.pexels.com/photos/7353487/pexels-photo-7353487.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 31,
            key: "veg",
            name: "veg-biriyani",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹70",
            rating: "4.3 / 5",
            url: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 32,
            key: "veg",
            name: "meals-pack",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹120",
            rating: "4.1 / 5",
            url: "https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 33,
            key: "veg",
            name: "full-meals",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹150",
            rating: "4.4 / 5",
            url: "https://images.pexels.com/photos/6183640/pexels-photo-6183640.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 34,
            key: "veg",
            name: "rountine-meals",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹90",
            rating: "4.3 / 5",
            url: "https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 35,
            key: "veg",
            name: "rice with sappati",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹80",
            rating: "4.0 / 5",
            url: "https://media.istockphoto.com/id/817993222/photo/chicken-65-spicy-deep-fried-bar-appetizer-or-quick-snack-from-india-in-a-frying-pan-over-white.jpg?s=612x612&w=0&k=20&c=ERhl0SbGpLrsJsafZnmOA2DAyOQ_tdvILuJFZ2kjhDE=",
        },
        {
            Albumid: 1,
            id: 36,
            key: "veg",
            name: "Dosai",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹60",
            rating: "4.4 / 5",
            url: "https://media.istockphoto.com/id/1369382922/photo/on-a-plate-lies-fried-meat-with-rustic-potatoes-with-vegetables-cherry-tomatoes-cutlery-on-a.jpg?s=612x612&w=0&k=20&c=8QrUdE2my7-aMYctAPNXEd3jtn8MLm_N5oGmzyh0kjI=",
        },
        {
            Albumid: 1,
            id: 37,
            key: "veg",
            name: "veg-biriyani(special)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹160",
            rating: "5 / 5",
            url: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 38,
            key: "veg",
            name: "small-meals",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹110",
            rating: "4.2 / 5",
            url: "https://images.pexels.com/photos/7593230/pexels-photo-7593230.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            Albumid: 1,
            id: 39,
            key: "veg",
            name: "sampar",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹50",
            rating: "4.4 / 5",
            url: "https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            Albumid: 1,
            id: 40,
            key: "veg",
            name: "family-pack",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, dolor at convallis sagittis, metus odio efficitur tellus, ut vehicula lacus metus ac ipsum. Mauris tincidunt, est mattis interdum commodo, sapien ipsum iaculis tortor, in pretium sem turpis vel ipsum. In hac habitasse platea dictumst",
            price: "₹90",
            rating: "4.2 / 5",
            url: "https://images.pexels.com/photos/2302809/pexels-photo-2302809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]
    const [data, setData] = useState(Myfood)

    function indian(item) {
        const india = Myfood.filter((e) => e.key === item)
        setData(india);
    }
    function western(item) {
        const west = Myfood.filter((e) => e.key === item)
        setData(west);
    }
    function chinese(item) {
        const china = Myfood.filter((e) => e.key === item)
        setData(china);
    }
    function nonveg(item) {
        const non = Myfood.filter((e) => e.key === item)
        setData(non);
    }
    function all() {
        const all = Myfood.filter((e) => e.key)
        setData(all);
    }
    const dispatch = useDispatch();
    const cart = useSelector(selectCount);
    const history=useHistory()
    function singleDish(){
        history.push('/single')
    }
    return (
        <div>
            <div className="buttons">
                <button onClick={() => all("all")} id="btnall">All</button>
                <button onClick={() => indian("veg")} id="btnindian">Indian</button>
                <button onClick={() => chinese("chinese")} id="btnchinese">Chinese</button>
                <button onClick={() => western("western")} id="btnwestern">western</button>
                <button onClick={() => nonveg("non-veg")} id="btnnon">Non-Veg</button>
            </div>

            <div id="foodpack">
                {
                    data.map((e) => {
                        return <div className="foodpack" id="food-pack" key={e.id}>
                            <div className="fooditem" id={"img" + e.id}>
                                <div id="navimg">
                                    <div className="foodimg" onClick={()=>singleDish()}>
                                        <img src={e.url} />
                                    </div>
                                    <div id="food-name">
                                        <h4 id="dishname">{e.name}</h4>
                                        <h4>price:{e.price}</h4>
                                    </div>
                                    <div className="buycart">
                                        <button>Buy Now</button>
                                        <button onClick={() => dispatch(increment())} id="btncart">Add cart</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>

        </div>

    )
}
export default Datas