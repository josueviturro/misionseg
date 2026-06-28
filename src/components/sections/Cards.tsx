import { useEffect, useState } from "react";
import data from "../../assets/data.json"


const Cards = () => {
        type Card = {
        imageKey: string,
        title: string,
        description: string
    }
    
    const [fade, setFade] = useState<boolean>(true);
    const [number , setNumber] = useState<number>(0)
    const cards: Card  = data.card[number]

    const preloadImages = (sources: string[]) => {
  return Promise.all(
    sources.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    )
  );
};

useEffect(() => {
  const load = async () => {
    await preloadImages(
      data.card.map((card) => card.imageKey)
    );

    console.log("✅ Todas las imágenes cargadas");
  };

  load();
}, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setNumber((prev) => (prev + 1) % data.card.length);
                setFade(true);
            },500)
        },7000)
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className={`Card_container ${fade ? "fade-in" : "fade-out"}`}>
            <img src={cards.imageKey} className="Imagen_card_back" />
            <div className="Card">
                <img src={cards.imageKey} className="Imagen_card" />
                <div className="Card_text_container">    
                    <h3 className="Card_title">{cards.title}</h3>
                    <p className="Card_text">{cards.description}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards;