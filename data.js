const phoneData = [
    {
        id: 1,
        type: "IPHONE",
        model: "iPhone 14 Pro Max",
        image: "https://static.wixstatic.com/media/99b596_3db049ec2ff14d56bbfb3289815fd2ed~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 2,
        type: "IPHONE",
        model: "iPhone 13 Pro",
        image: "https://static.wixstatic.com/media/99b596_0837055b6d344fb6aa4a60cac8533a30~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 3,
        type: "IPHONE",
        model: "iPhone 12 Pro Max",
        image: "https://static.wixstatic.com/media/99b596_154bfd97bc5f4c81934bb259fa66a5f8~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 4,
        type: "IPHONE",
        model: "iPhone 13 ",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 5,
        type: "IPHONE",
        model: "iPhone 12",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 6,
        type: "IPHONE",
        model: "iPhone SE (2020)",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 7,
        type: "IPHONE",
        model: "iPhone 11 Pro",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 8,
        type: "IPHONE",
        model: "iPhone XR",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 9,
        type: "IPHONE",
        model: "iPhone 8",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 10,
        type: "IPHONE",
        model: "iPhone SE (2016)",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 11,
        type: "IPHONE",
        model: "iPhone X",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
    {
        id: 12,
        type: "IPHONE",
        model: "iPhone 11",
        image: "https://static.wixstatic.com/media/99b596_6f0e8b1b02244373ab6e4ccc26170d76~mv2.png/v1/fill/w_334,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state_edited.png",
    },
];

const catagoryTypes = [
    {
        id: 1,
        name: "iPhone",
        image: "https://static.wixstatic.com/media/99b596_02c7d183c9f846d482eff23d71fb049f~mv2.png/v1/fill/w_128,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/iPhone-12-Procracked-screen.png",
        bg: "#f5c5b0",
    },
    {
        id: 2,
        name: "Samsung Android",
        image: "https://static.wixstatic.com/media/99b596_5cb4c79e756c447caffd720561df6fbf~mv2.png/v1/fill/w_200,h_183,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1144404-middle.png",
        bg: "#f5b6b0",
    },
    {
        id: 3,
        name: "Google",
        image: "https://static.wixstatic.com/media/99b596_3a11c99684034409af6b0703ac99a5e0~mv2.png/v1/fill/w_196,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tab.png",
        bg: "#d9c1b4",
    },
    {
        id: 4,
        name: "OnePlus",
        image: "https://static.wixstatic.com/media/99b596_95ab285494c74157ba977be5ef29f09e~mv2.png/v1/fill/w_226,h_151,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/laptop.png",
        bg: "#dbd1b6",
    },
];

const mobileIconImages = [
    {
        id: 1,
        image: "https://static.wixstatic.com/media/99b596_b71d55e0088249c6947e3280357ab159~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/phone-cracked-screen.png",
        title: "SCREEN REPAIR",
    },
    {
        id: 2,
        image: "https://static.wixstatic.com/media/99b596_59eb1f9f428240c0ba80b240186e8f95~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/smartphone-battery-repair.png",
        title: "BATTERY REPLACEMENT",
    },
    {
        id: 3,
        image: "https://static.wixstatic.com/media/99b596_ee866b2bf22f47338ba876571f722050~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/charging-port-7.png",
        title: "CHARGER PORT REPLACEMENT",
    },
    {
        id: 4,
        image: "https://static.wixstatic.com/media/99b596_78ad61d534e14109b86a9c933b12efe1~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Phone%20water%20damage.png",
        title: "WATER DAMAGE",
    },
    {
        id: 5,
        image: "https://static.wixstatic.com/media/99b596_8aba657a2992447290ab3e0619f4cb5b~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/phone-cracked-back-screen.png",
        title: "BACK GLASS REPLACEMENT",
    },
    {
        id: 6,
        image: "https://static.wixstatic.com/media/99b596_d49690643ffd44f984a9eba409cd7d1c~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/power-button-33.png",
        title: "POWER BUTTON REPAIR",
    },
    {
        id: 7,
        image: "https://static.wixstatic.com/media/99b596_e3baaa67ce7f4ad3b2ec9d72b0fe32a3~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/camera.png",
        title: "CAMERA REPAIR",
    },
    {
        id: 8,
        image: "https://static.wixstatic.com/media/99b596_a6d5dbee4bdf4174947ba3d9b98195f5~mv2.png/v1/fill/w_174,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/loudspeaker.png",
        title: "SPEAKER REPAIR",
    },
];

export { phoneData, catagoryTypes, mobileIconImages };
