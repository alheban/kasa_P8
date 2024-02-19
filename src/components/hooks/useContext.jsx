import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [dataLogement, setDataLogement] = useState([]);
    const [dataApropos, setDataAbout] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataResponse = await import('./../../data/data.json');
                const aboutResponse = await import('./../../data/aboutdata.json');

                // Assuming your data is structured as an array
                const formattedData = dataResponse.default.map(({ id, title, cover, pictures, location, tags, rating, host, description, equipments }) => ({
                    id,
                    title,
                    cover,
                    pictures: pictures || [],
                    location,
                    tags,
                    rating,
                    host,
                    namehost: host.name,
                    picture: host.picture,
                    description,
                    equipments
                }));

                const formattedAboutData = aboutResponse.default.map(({ id, title, content }) => ({ id, title, content }));

                setDataLogement(formattedData);
                setDataAbout(formattedAboutData);
            } catch (error) {
            
            }
        };

        fetchData();
    }, []); 
    return (
        <DataContext.Provider value={{ dataLogement, dataApropos }}>
            {children}
        </DataContext.Provider>
    );
};