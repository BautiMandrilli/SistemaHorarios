 const ArrowButton  = () => {
    return (
        <button className="arrow-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
      stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
        </button>
    )
}
export function MainPage () {
   return (
    
    <main>
    <h1 >¡Bienvenido!</h1>
    <p className="welcomePar">Esta página fue creada par que puedas acomodar mejor tus 
        horarios facultativos y puedas hacer un mejor plan al momento de 
        cursar. espero que sea de ayuda <strong>¡Mucha suerte!</strong>
    </p>

    <span><strong>¡Empecemos!</strong></span>
    <div className="button-conteiner"> <ArrowButton /> </div>
    
  
    </main>
    
   )
    
}