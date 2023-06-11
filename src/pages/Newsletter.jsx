import { useEffect, useState } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import './Newsletter.css'

function Newsletter() {
    const [newsletterList, setNewsletterList] = useState([])
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        const getDatas = async () => {
            const { data } = await axiosPrivate.get('/api/newsletter')
            setNewsletterList(data)
        }
        getDatas()
    }, [axiosPrivate])

    return (
        <section id='newsletter'>
            <h1>Newsletter</h1>
            <div>
                <table>
                    <caption>Emails enregistrés dans la newsletter</caption>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>date d'ajout</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newsletterList.datas ? newsletterList.datas.map(newsletter => (
                                <tr key={newsletter.id}>
                                    <td>{newsletter.id}</td>
                                    <td>{newsletter.email}</td>
                                    <td>{Intl.DateTimeFormat('fr-FR').format(new Date(newsletter.registration_date))}</td>
                                </tr>
                            )) : null
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Newsletter;
