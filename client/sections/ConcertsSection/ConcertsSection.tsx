import styles from './ConcertsSection.module.sass'
import image1 from '../../public/assets/concerts/concert1.jpg'
import image2 from '../../public/assets/concerts/concert2.jpg'
import image3 from '../../public/assets/concerts/concert3.jpg'
import React, { useEffect, useState } from 'react'
import MoreArrow from '../../components/MoreArrow/MoreArrow'
import ArrowRight from '../../components/ArrowRight/ArrowRight'
import useTypedSelector from '../../hooks/useTypedSelector'
import { buyTiket, moreButton } from '../../vars'
import fetchQuery from '../../services/ssr'

interface IConcert {
	Day: string
	Month: string
	Year: string
	City: string
	Place: string
	Link: string
	Time: string
	concertDone: boolean
}

interface ConcertsSection {
	ConcertSection: any
}

const ConcertsSection = () => {
	const lang = useTypedSelector(state => state.app.language)
	const [pagination, setCurrentPagination] = useState<number>(5)
	const [isMoreVisible, setMobVisible] = useState<boolean>(true)
	const [concertsAmount, setConcertsAmount] = useState<number>(3)

	const clickMoreAction = () => {
		if (pagination + 3 > concertsAmount) {
			setCurrentPagination(concertsAmount)
			setMobVisible(false)
		} else {
			setCurrentPagination(pagination + 3)
		}
	}

	const [sectionData, setSectionData] = useState<IConcert[]>([
		{
			City: 'Berge, Germany',
			Day: '11',
			Link: 'https://www.altmarkfestspiele.de/programm/',
			Month: '06',
			Place: 'Dorfkirche',
			Time: '2022-06-11',
			Year: '2022',
		},
	] as IConcert[])

	useEffect(() => {
		async function fetchData() {
			const response = await fetchQuery('concerts', lang);
			console.log('response', response);

			const now = new Date();

			const concerts = response.map((concert: any) => {
				const dateString = concert.acf.date; // "2025-05-07 00:00:00"
				const concertDate = new Date(dateString);

				const [year, month, day] = dateString.split(' ')[0].split('-');

				return {
					...concert.acf,
					Day: day,
					Month: month,
					Year: year,
					concertDone: now > concertDate,
				};
			});

			const sortedConcerts = concerts.sort((a: any, b: any) =>
				new Date(a.date).getTime() - new Date(b.date).getTime()
			);

			setSectionData(sortedConcerts);
			setConcertsAmount(sortedConcerts.length);
		}

		fetchData();
	}, [lang]);

	return (
		<div className={styles.concertsSection}>
			<div className='container'>
				<div className={styles.concertsImagesWrapper}>
					<div className={styles.concertsWrapper}>
						{sectionData
							.sort(function (a, b) {
								if (a.Time < b.Time) return 1
								else if (a.Time > b.Time) return -1
								else return 0
							})
							.map((concert: any, index: number) => (
								<div key={concert.Day + concert.Link + concert.City + index} className={`${styles.concertElem} ${concert.concertDone ? `${styles.done}` : ''}`}>
									<div className={styles.leftSide}>
										<span className={styles.day}>{concert.Day}</span>
										<span className={styles.dayMonth}>
											{concert.Month} / {concert.Year}
										</span>
									</div>
									<div className={styles.centerSide}>
										<span className={styles.city}>{concert.city}</span>
										<span className={styles.location}>{concert.place}</span>
									</div>
									<div className={styles.rightSide}>
										<a target="_blank" className={styles.buyTiсket} href={concert.link}>
											<span>{buyTiket[lang]}</span>
											<ArrowRight />
										</a>
									</div>
								</div>
							))
							.slice(0, pagination)}
					</div>

					<div className={styles.imagesWrapper}>
						<img src={image1.src} alt='concert1' />
						<img src={image2.src} alt='concert2' />
						<img src={image3.src} alt='concert3' />
					</div>
				</div>

				{isMoreVisible && (
					<div onClick={clickMoreAction} className='moreWrap'>
						<MoreArrow />
						<span>{moreButton[lang]}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default ConcertsSection
