/** @jsx jsx */
import {jsx, Box, Heading, Text, Button, Input} from 'theme-ui'
import {useState} from 'react'


export default function FormPhone() {

    const [phone, setPhone] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [status, setStatus] = useState('')

    async function handleSubmit (e) {
        e.preventDefault()

        const formData = {
            phone,
        }

        setSubmitted(true)
        // console.log(formData)

        await fetch('/api/phon', {
            method: 'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                setSubmitted(false)
                setPhone('')
                setStatus('success')
            }
            else {
                setStatus('error')
            }
        })
    }


    return (
        <section sx={styles.form} id='form-contact'>
            <Box sx={styles.modal}>
                <Text style={{marginBottom: '15px'}}>Заказать просмотр | Получить консультацию</Text>
                <form  onSubmit={handleSubmit} sx={styles.styleBox}>
                    <Input
                        id="phone"
                        type="phone"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                        placeholder='Телефон'
                        required
                    />
                    <Button
                        type='submit'
                        isLoading={submitted}
                        loadingText="Submitting"
                    >
                        Отправить
                    </Button>
                </form>
                <Box sx={styles.info}>
                    {  status === "success" ?
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
            </Box>
        </section>
    )
}

const styles = {
    form: {
        pt: [0, 0, '5px', '5px', null, null, '10px', '15px'],
    },
    modal: {
        width: '50%',
        minWidth: '350px',
        height: 'auto',
        padding: 20,
        margin: '50px auto',
        // border: '1px solid rgba(38, 78, 118, 0.1)',
        border: '1px solid #EA3A60',
        borderRadius: 20,
        textAlign: 'center',
        boxShadow: '0px 0px 75px -25px rgba(234, 58, 96, 1)',
        'text, input, textarea': {
            marginBottom: 20,
        }
    },
    styleBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        'input': {
            width: '75%',
            marginRight: '10px',
        },
        'button': {
            marginTop: '-20px',
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