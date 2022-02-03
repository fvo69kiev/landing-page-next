/** @jsx jsx */
import {jsx, Box, Heading, Text, Button, Input, Textarea } from 'theme-ui'
import {useState} from 'react'


export default function Modal() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [status, setStatus] = useState('')

    async function handleSubmit (e) {
        e.preventDefault()

        const formData = {
            name,
            email,
            phone,
            message
        }

        setSubmitted(true)
        // console.log(formData)

        await fetch('/api/contac', {
            method: 'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                setSubmitted(false)
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setStatus('success')
            }
            else {
                setStatus('error')
            }
        })
    }


    return (
            <Box sx={styles.modal}>
                <form  onSubmit={handleSubmit}>
                    <Text>Подать заявку</Text>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder='Имя'
                        required
                    />
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Email'
                        required
                    />
                    <Input
                        id="phone"
                        type="phone"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                        placeholder='Телефон'
                        required
                    />
                    <Textarea
                        id="text"
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        rows="4"
                        placeholder='Сообщение'
                    />
                    <Button
                        type='submit'
                        isLoading={submitted}
                        loadingText="Submitting"
                    >
                        Отправить
                    </Button>
                    <Box sx={styles.info}>
                        {status === "success" ?
                            <Box sx={styles.success} status="success">
                                <Heading variant='title' style={{color: 'white'}}>Успешно!</Heading>
                                <Text>Ваша заявка отправлена. Мы с Вами свяжемся в ближайшее время</Text>
                            </Box>
                            : status === "error" ?
                                <Box sx={styles.error} status="error">
                                    <Heading variant='title' style={{color: 'white'}}>Ошибка!</Heading>
                                    <Text>Ваша заявка не отправлена. Попробуйте еще раз</Text>
                                </Box>
                                : null
                        }
                    </Box>
                </form>
            </Box>
    )
}

const styles = {
    modal: {
        width: '350px',
        height: 'auto',
        padding: 20,
        margin: '50px auto',
        border: '1px solid rgba(38, 78, 118, 0.1)',
        borderRadius: 20,
        textAlign: 'center',
        'text, input, textarea': {
            marginBottom: 20,
        }
    },
    info: {
        marginTop: '20px',
        color: 'white',
    },
    success: {
        padding: '5px 10px',
        background: '#2563FF',
    },
    error: {
        padding: '5px 10px',
        background: '#D32047',
    },
}