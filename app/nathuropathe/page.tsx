import { Leaf } from "lucide-react";
import Image from "next/image";

export default function Naturopath() {
  return (
    <>
    <section className="section-2 py-20 relative flex flex-col items-center">
        <h1 className='font-bold'>Les Principes de la Naturopathie</h1>
        <h4 className='mt-10 text-emerald-700 font-bold'>Le naturopathe se réfère aux principes Hippocratiques</h4>       
          <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              src="/images/leaf.jpg"
              alt="Fond nature"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              />
          </div>
          <div className="absolute inset-0 bg-white/80 -z-10"></div>
        <div className=' rounded-lg p-6 relative overflow-hidden'>
          <div className="flex items-center justify-center mb-6 z-10">
            <Leaf className="text-[#d3ab8d] w-16 h-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">1</div>
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">PRIMUM NON NOCERE:</span>
                <span>D'abord ne pas nuire.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">2</div>
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">VIS MEDICATRIX NATURAE:</span>
                <span>La nature est guérisseuse.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">3</div>
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">HOME TOTUS, TOLLE TOTOM:</span>
                <span>Considérer l'homme dans sa globalité.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">4</div>
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">TOLLE CAUSAM:</span>
                <span>Identifier et traiter la cause.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">5</div>
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">DEINDE PURGARE:</span>
                <span>Détoxifier et purifier (purger).</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">6</div> 
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">DOCERE:</span>
                <span>La nature enseigne.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-[#ede1d7] p-4 rounded-lg hover:shadow-md transition-all">
              <div className="text-[#d3ab8d77] text-5xl font-extrabold">7</div>
              <div className="flex flex-col">
                <span className="text-[#d3ab8d] font-semibold">ARCEO:</span>
                <span>Prévenir</span>
              </div>
            </div>
          </div>
        </div>
    </section>
        <div className="mt-10 md:12 lg:px-36 py-10 grid sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="shadow-md rounded-lg p-4 flex flex-col gap-3">
            <span className="font-bold text-emerald-700 text-xl">
              Le naturopathe ne remplace, ni ne dispense d’une consultation médicale.
            </span>
          </div>
          <div className="shadow-md rounded-lg p-4 flex flex-col gap-3">
            <span className="font-bold text-emerald-700 text-xl">
              Le naturopathe ne juge pas de la nécessité d’un traitement, n’interfère pas dans la mise en place d’un traitement en cours.
            </span>
            <span className="text-sm">
              Toutefois, il est de son devoir d’amener son client à consulter son médecin traitant, un médecin spécialiste, un kinésithérapeute, un ostéopathe, son chirurgien dentiste…s’il suspecte une affection ou que le sujet n’est pas assidu dans la prise en charge de son parcours de santé.
            </span>
          </div>
          <div className="shadow-md rounded-lg p-4 flex flex-col gap-3">
            <span className="font-bold text-emerald-700 text-xl">
              Le naturopathe n’interfère pas dans un traitement médical.
            </span>
            <span className="text-sm">
              Cependant, des demandes de clients souhaitant réduire l’usage de certaines molécules chimiques pour des solutions plus naturelles sont en augmentation, il est important de les informer sur les éventuelles interactions médicamenteuses et des risques de diminuer ou arrêter un traitement en auto-médication sans l’aval du médecin prescripteur du traitement.
            </span>
          </div>
          <div className="shadow-md rounded-lg p-4 flex flex-col gap-3">
            <span className="font-bold text-emerald-700 text-xl">
              Le naturopathe vous reçoit avec une écoute attentive, confidentielle  dans la bienveillance. 
            </span>
            <span className="text-sm">
              Comme toute profession en rapport avec la santé, il est soumis au secret professionnel.
            </span>
          </div>
        </div>

        <div className='mt-3 px-3 text-black bg-gray-300 rounded'>La naturopathie est lorem.</div>
    </>
  );
}
