import { Analytics } from '@vercel/analytics/react'
import emailjs from 'emailjs-com'
import { ArrowUpRight } from 'lucide-react'
import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import SendSuccess from './assets/email.svg'
import SendError from './assets/error.svg'
import Logo from './assets/logo.svg'
import { Loader, Modal } from './components'
import { Container, Content, Form } from './styles/styles'

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [statusMessage, setStatusMessage] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const handleCloseModal = () => setIsModalOpen(false)

	const [formData, setFormData] = useState({
		nome: '',
		idade: '',
		horario: [],
		necessidade: [],
		whatsapp: '',
	})

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target

		if (type === 'checkbox') {
			setFormData((prevData) => ({
				...prevData,
				[name]: checked
					? [...prevData[name], value]
					: prevData[name].filter((item) => item !== value),
			}))
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}))
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (
			!formData.nome.trim() ||
			!formData.idade.trim() ||
			formData.horario.length === 0 ||
			formData.necessidade.length === 0 ||
			!formData.whatsapp.trim() ||
			!/^\(\d{2}\) 9 \d{4}-\d{4}$/.test(formData.whatsapp)
		) {
			setStatusMessage('alldata')
			setIsModalOpen(true)
			return
		}

		setIsLoading(true)

		emailjs
			.send(
				'service_zfzwm1v',
				'template_j59osij',
				{
					nome: formData.nome,
					idade: formData.idade,
					horario: formData.horario.join(', '),
					necessidade: formData.necessidade.join(', '),
					whatsapp: formData.whatsapp,
				},
				'fq4DGFk5MAwDYCyxi',
			)
			.then(
				(result) => {
					setIsLoading(false)
					setStatusMessage('success')
					setIsModalOpen(true)
				},
				(error) => {
					setIsLoading(false)
					setStatusMessage('error')
					setIsModalOpen(true)
				},
			)
	}

	return (
		<Container>
			<Content>
				<div className="left">
					<img
						src={Logo}
						alt="logo da empresa Ganhou Benefícios"
						className="logo"
					/>
					<div className="title">
						<h1 className="text">
							Cuide da saúde de seus olhos, Ganhe um exame de vista gratuito em
							Patos de Minas!
						</h1>
						<span className="warning">*consulte as condições</span>
					</div>
					<p className="description">
						Responda este breve questionário e um de nossos parceiros entrará em
						contato para agendar seu exame gratuitamente!
					</p>
					<a
						href="https://wa.me/5534997330203?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20campanha%20de%20exame%20de%20vista%20gratuito!"
						target="_blank"
						className="button"
						rel="noreferrer"
					>
						Saiba mais sobre a campanha
						<ArrowUpRight />
					</a>
				</div>

				<Form onSubmit={handleSubmit}>
					<div className="top">
						<input
							type="text"
							placeholder="Nome completo"
							name="nome"
							onChange={handleInputChange}
							required
						/>
						<input
							className="inputNumber"
							type="number"
							placeholder="Idade"
							name="idade"
							onChange={handleInputChange}
							required
						/>
					</div>

					<div className="one">
						<p className="label">
							Escolha abaixo o <span>Melhor Horário</span> para o seu
							atendimento:
						</p>
						<div className="checks">
							{[
								'09:00',
								'10:00',
								'11:00',
								'12:00',
								'13:00',
								'14:00',
								'15:00',
								'Qualquer horário',
							].map((hora) => (
								<div className="checkbox" key={hora}>
									<input
										type="checkbox"
										value={hora}
										name="horario"
										onChange={handleInputChange}
									/>
									{hora}
								</div>
							))}
						</div>
					</div>

					<div className="two">
						<p className="label">Qual a sua maior necessidade no momento?</p>
						<div className="checks">
							{[
								'Exame de Rotina',
								'Revisão de Grau',
								'Tratamento de Catarata',
								'Tratamento de Glaucoma',
								'Tratamento de Ceratocone',
								'Tratamento de Pterígio',
							].map((necessidade) => (
								<div className="checkbox" key={necessidade}>
									<input
										type="checkbox"
										value={necessidade}
										name="necessidade"
										onChange={handleInputChange}
									/>
									{necessidade}
								</div>
							))}
						</div>
					</div>

					<div className="whatsapp">
						<p className="label">
							Seu Whatsapp para contato e envio da confirmação:
						</p>
						<InputMask
							className="input"
							mask="(99) 9 9999-9999"
							placeholder="Seu número do whatsapp"
							name="whatsapp"
							onChange={handleInputChange}
							value={formData.whatsapp}
							required
						>
							{(inputProps) => <input {...inputProps} type="text" />}
						</InputMask>
					</div>

					<button type="submit" disabled={isLoading}>
						{isLoading ? <Loader /> : 'Solicitar agendamento'}
					</button>
				</Form>
			</Content>

			{isModalOpen && statusMessage === 'success' && (
				<Modal onClose={handleCloseModal}>
					<img
						src={SendSuccess}
						className="image"
						alt="imagem de sucesso ao enviar email"
					/>
					<p className="text">
						Sua solicitação foi enviada com sucesso. Entraremos em contato!
					</p>
				</Modal>
			)}

			{isModalOpen && statusMessage === 'error' && (
				<Modal onClose={handleCloseModal}>
					<img
						src={SendError}
						className="image"
						alt="imagem de erro ao enviar email"
					/>
					<p>
						Ocorreu um erro ao tentar enviar sua mensagem. Por favor, tente
						novamente.
					</p>
				</Modal>
			)}

			{isModalOpen && statusMessage === 'alldata' && (
				<Modal onClose={handleCloseModal}>
					<img
						src={SendError}
						className="image"
						alt="imagem de erro ao enviar email"
					/>
					<p>Preencha todos os campos do formulário corretamente!</p>
				</Modal>
			)}
			<Analytics />
		</Container>
	)
}

export default App
