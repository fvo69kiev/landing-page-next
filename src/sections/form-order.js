/** @jsx jsx */
import {jsx, Box, Heading, Text, Button, Input, Textarea } from 'theme-ui'
import React, {useState} from 'react'


export default function FormOrder() {

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

        await fetch('/api/orde', {
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
        <section sx={styles.form} id='form-order'>
            <Box sx={styles.modal}>
                <form  onSubmit={handleSubmit}>
                    <Text style={{marginBottom: '15px'}}>Подать заявку</Text>
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
        </section>
    )
}

const styles = {
    form: {
        pt: [0, 0, 0, '5px', null, null, '10px', '15px'],
    },
    modal: {
        width: '350px',
        height: 'auto',
        padding: 20,
        margin: '50px auto',
        border: '1px solid #EA3A60',
        borderRadius: 20,
        textAlign: 'center',
        boxShadow: '0px 0px 75px -25px rgba(234, 58, 96, 1)',
        'text, input, textarea': {
            marginBottom: 20,
        },
        'textarea': {
            border: '1px solid #E5ECF4',
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