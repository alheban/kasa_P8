import { createContext, useState } from 'react';
import data from '/public/data.json'; // Importation directe du fichier JSON
import dataAbout from '/public/aboutdata.json'; // Importation directe du fichier JSON
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    
    const [dataLogement, setDataLogement] = useState(
        data.map(({ id, title, cover, pictures, location, tags, rating, host, description, equipments }) => ({
          id,
          title,
          cover,
          pictures: pictures || [],
          location,
          tags,
          rating,
          host,
          namehost: host.name,
          picture: host.picture, // Nous définissons une nouvelle clé 'name' qui récupère la valeur de 'host.name'
          description,
          equipments
        }))
      );

    const [dataApropos, setDataAbout] = useState(dataAbout.map(({ id,title,content }) => ({ id,title,content })));


    return (
        <DataContext.Provider value={{ dataLogement,dataApropos }}>
            {children}
        </DataContext.Provider>
    );
};

