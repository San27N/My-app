"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import FloatingHearts from "../components/FloatingHearts"

const userInfo = {
  Akki: {
    letter: "My love, I can’t even begin to tell you how grateful I am to have you in my life. You’re not just a part of it—you are the heart of it, the one who makes everything brighter, warmer, and infinitely more beautiful. Before I even found my better half, I found my forever in you, and that’s a love I’ll cherish every single day. I can’t imagine where I’d be if our paths hadn’t crossed, if you hadn’t taken that first step, if fate hadn’t been so kind to me. You are, without a doubt, the best thing that has ever happened to me, and I thank the universe for you every single day. This Valentine’s, I wanted to do something a little special, something to remind you just how much you mean to me. Even though we’re miles apart this Galentine’s, that distance will never lessen the love I have for you. It only makes me cherish you more, miss you more, and look forward to every moment we get to share. No matter where we are, no matter how far, you and I will always find a way to celebrate the beautiful bond we share. So here’s to us, to our love, to the unbreakable connection that keeps us together no matter what. I know i am little late but better late than never. I LOVE YOU SO SO MUCH BABY." ,
    images: ["./images/photo_2025-02-13_22-15-54.jpg", "./images/photo_1_2025-02-13_21-59-02.jpg", "./images/photo_8_2025-02-13_21-59-02.jpg"],
  },
  Nikki: {
    letter: "Nikki, our friendship means the world to me.Though we were in the same school for almost 7 years we were not really close friends but after we met in sri chaitanya, the whole group of girls and you have been the best thing that ever happened. you make the most dull moments bright with just your presence. you are a natural papa and i love that about you. This galentines tho we cant celebrate it together i just wanted to surprise you with this little gift virtually from my end and maybe make your day a little brighter than it already is. I miss you and we should meet often please , illu pakka pakkana petukoni kuda we meet zamana kalam lo oka sari. I can’t tell you enough how much I appreciate you and how lucky I feel to have you in my life. I love you with all my heart, and I will always be grateful for you!",
    images: ["./images/photo_1_2025-02-13_21-58-17.jpg"],
  },
  Jo: {
    letter: "Jo, You are a beautiful soul. Thank you for always letting me steal your wardore every time we go out. thank you for having my back when i do the stupidest things. Thank you for dancing with me when i was ded drunk i mean you were too but still i had a lot of fun dancing with you. thank you for taking care of me like a baby. i cant begin to tell you how grateful and how lucky i feel for having you in my life, All the theta panulu all the things we did together are the memories i am gonna cherish for life , from ranting about boys to talking about career and life we all have come a long way and touch wood touch wood i am so lucky to have found such a great group of female friendships in a world full of selfish people.This galentines i wanted to show my love in this form and send you a virtual gift by showing you how much i love you",
    images: ["./images/photo_4_2025-02-13_21-58-17.jpg"],
  },
  Hansi: {
    letter: "Hansi papa, my heart! You are the kind of friend who makes life feel softer, warmer, and full of love. There is something so special about you—the way you care, the way you love, the way you always make sure the people around you feel important. It is a rare and beautiful gift, and I feel so lucky that I get to experience it.You have always been there for me, always made me feel loved, always reminded me that I am never alone. No matter how tough things get, I know that I can turn to you and find comfort in your words, in your presence, in your love. You are one of the best things that has ever happened to me, and I promise to cherish our friendship always. I love you endlessly, and I am so grateful for you! Also thank you so much for all the edits ik i was a pain in the ass but you still stayed up and did my edits for me you are such a cutie baby , So this galentines im sending you this virtual gift since we are not able to celebrate it together. i would also like to add that we really really need to get our pictures together like idi chesdham ani open chesthey naku literally pictures eh dorukuthalevu neevi chi 🤧",
    images: ["./images/photo_3_2025-02-13_21-58-17.jpg", "./images/photo_10_2025-02-13_21-59-02.jpg"],
  },
  Varnika: {
    letter: "Varnika ,My sweet, adorable little bundle of joy! You are the kid of the group, the one who brings all the innocence, the mischief, and the endless laughter into our lives. And I wouldn’t have it any other way! I don’t think you realize just how much joy you bring to everyone around you. You have this effortless way of making things fun, of making us all laugh even when we’re feeling down, of reminding us to embrace the little things in life. I know you do a lot of thetha panulu and attract problems as if they are your boyfriends but then yeah you always have been the kid of the group and these days watching you all group up and talking to us about everything makes me feel like 'damnnn , this kid is no more a kid she has grownupp ahhhhh' but thats totally okay coz you are learning and growing which is a great thing but please be thoda careful. jokes apart id like to tell you how lucky i am to have you in my life. i am so grateful for this friendship. so , since this galentines we are not able to celebrate it together i am sending you a virtual gift to surprise you and show you how much i love you.",
    images: ["./images/photo_2_2025-02-13_21-58-17.jpg"],
  },
  Spoo: {
    letter: "Helloo pellama , i hope no one took away my rights from me. i know its been a while we spoke but i understand we've been busy with our own life but i really really miss talking to you especially flirt with my pellam ahh its been a while i flirted with you that the reason im sending this cute little virtual gift for my pellam to remind her that i still exist and that she is still mine. Even if she gets a real real husband she is gonna be mine first and then his so thats why im sending this to you remember okay 😂. Okay okay jokes apart you are such a cutie. I wanted to show you how much i adore you and how grateful i am for all this i really appreciate all the effort we have all put in to make this friendships work with no toxicity and all. thats why this galentines im sending a virtual gift to show you how much i love you and how much you mean to me since we cant meet in personn. I miss you and I love you so so much papa",
    images: ["./images/photo_7_2025-02-13_21-58-17.jpg"],
  },
  Hasini: {
    letter: "Helloo papa , I know that you know that i am making this for you but ofcourse you dont know what is in it so here it goes . We have become inseperable in the last 2 semesters you annoying me and me annoying which is endless. Class are never boring with you. Also be ready for a lifetime subscription of nithya annoying you endlessly everytime she is scared,happy,sad or bored. No matter what i am gonna call you and annoy the hell out of you. You are the sweetest and the most sensible person in the 3 of us and i love love love to share everything and get your opinion on stuff though i dont follow it adi verey vishyam anuko but still i do value your opinion. thank you for giving me a push everytime i feel like i dont have it in me and cant handle shit for another min . Thank you for always bearing with all my tantrums. I never did anything like this before for you this is the first time and i really want to make it memorable for you thats the reason i am sending it on the day of valentines day the day full of love . Ofcourse mana mokaniki evad ledu anuko adi secondary kani i am there hasini neku dont worry 35 varak neku pelli kaledhu anuko neney cheskunta apudu open relationship la undochu iddaram, iddariki advantage see 😂😂. Kidding kidding but also i want to tell you how funny you are when you cry like seriouslyyy mali edchi apps pikeyava phone la kelli choosi navukunta nenu kusonii abha abhaaa aroju legit asal exam sakkaga rayaley ani una apps ani pikesindi thope ra nuvu. Sare ley idi anta kadhu nenu main ga idi neku pampaniki reason to show you how much i love you for being there for me and how much i love you just for your existence. I am really really grateful for you ra. I Love You Papa",
    images: ["./images/photo_11_2025-02-13_21-59-02.jpg", "./images/photo_12_2025-02-13_21-58-17.jpg","./images/photo_13_2025-02-13_21-58-17.jpg"],
  },
  Chinnari: {
    letter: "My baby , Okay okay ik this is the first time and you are shook with all this happening sudden ga and i know you already have a boyfriend but that is not gonna stop me from sending my babygirl a virtual gift from my end NO NO No. Hi baby I just wanted to take a moment for showing you how grateful i am for having you in my life, despite all the fights we have stood tall and stronger for 20 years now damnnn we are gonna grow old together babyyy wowwwww , Papa me kishan babu jealous ayithadu emo parledhu ley na pilla kosam nenu cheskuntuna ani cheppu, em ana problem untey natho matladu manu i will take care 🤭🤭. Kidding kidding, ayithey the reason i am sending this to you is manam elago galentines kalisi celebrate cheskomu andukey to make it a little special and more memorable for you i am sending you this and also to show you how much i love you and how grateful i am. I LOVE YOU BABY",
    images: ["./images/photo_9_2025-02-13_21-59-022.jpg", "./images/photo_3_2025-02-13_21-59-02.jpg","./images/photo_11_2025-02-13_21-58-177.jpg"],
  },
}

export default function Home() {
  const [name, setName] = useState("")
  const [showContent, setShowContent] = useState(false)
  const [userDetails, setUserDetails] = useState<{ letter: string; images: string[] } | null>(null)

  useEffect(() => {
    const savedName = localStorage.getItem("userName")
    if (savedName) {
      setName(savedName)
      personalizePage(savedName)
    }
  }, [])

  const personalizePage = (inputName: string) => {
    const details = userInfo[inputName as keyof typeof userInfo]
    if (details) {
      setUserDetails(details)
      setShowContent(true)
      localStorage.setItem("userName", inputName)
    } else {
      alert("Sorry, we couldn't find personalized content for that name.")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-200 text-pink-700 relative overflow-hidden">
      <FloatingHearts />
      {!showContent ? (
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold mb-4">Enter your name, beautiful 💕</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border-2 border-pink-500 rounded-lg text-lg mb-4"
            placeholder="Your name"
          />
          <button
            onClick={() => personalizePage(name)}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Enter
          </button>
        </div>
      ) : (
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold mb-8">Welcome, {name}, to your personalized Galentine's gift! 💖</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">📸 Memory Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {userDetails?.images.map((img, index) => (
                <Image
                  key={index}
                  src={img || "/placeholder.svg"}
                  alt={`Memory ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">💌 A Special Letter</h2>
            <p className="text-lg">{userDetails?.letter}</p>
          </div>
          <h2 className="text-3xl font-bold">Happy Galentine's, {name}! 💕</h2>
        </div>
      )}
    </main>
  )
}

