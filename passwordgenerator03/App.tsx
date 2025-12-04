import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from "react-native-bouncy-checkbox";

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    const [password, setPassword] = useState('')
    const [IsPasswordGenerate, setIsPasswordGenerate] = useState(false)

    //other filters
    const [lowerCase, setLowerCase] = useState(true)
    const [upperCase, setUpperCase] = useState(false)
    const [numbers, setnumbers] = useState(false)
    const [symbol, setsymbol] = useState(false)

    const GeneratePasswordString = (passwordlength: number) => {
        let CharacterList = '';

        const LowerCase = 'qwertiopasdfghjklzxcvbnm';
        const UpperCases = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        const Numbers = '1234567890';
        const SpecialCharacters = '!@#$%^&*()_';

        if (lowerCase) {
            CharacterList += LowerCase
        }
        if (upperCase) {
            CharacterList += UpperCases
        }
        if (numbers) {
            CharacterList += Numbers
        }
        if (symbol) {
            CharacterList += SpecialCharacters
        }

        const Passwordresult = Createpassword(CharacterList, passwordlength)
        setPassword(Passwordresult)
        setIsPasswordGenerate(true);

    }

    const Createpassword = (character: string, passwordlength: number) => {
        let result = ''
        for (let i = 0; i < passwordlength; i++) {
            const characterindex = Math.round(Math.random() * character.length)
            result += character.charAt(characterindex)
        }
        return result;

        console.log('result')
        console.log(result)
    }

    const resetPassword = () => {
        setPassword('')
        setIsPasswordGenerate(false)
        setnumbers(false)
        setsymbol(false)
        setUpperCase(false)
        setLowerCase(true)
    }


    const passwordschema = Yup.object().shape({
        passwordlength: Yup.number()
            .min(4, "minimum 4 ")
            .max(16, "maximum 16")
            .required("Password length is require")
    })
    return (
        <ScrollView>
            <SafeAreaView style={styles.appContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}> Password generator </Text>
                    <Formik
                        initialValues={{ passwordlength: "" }}
                        validationSchema={passwordschema}
                        onSubmit={values => {
                            console.log(values)
                            GeneratePasswordString(Number(values.passwordlength)) // todo
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            handleReset,
                            /* and other goodies */
                        }) => (
                            <>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Password Length</Text>
                                    {touched.passwordlength && errors.passwordlength && (
                                        <Text style={styles.errorText}>{errors.passwordlength}</Text>
                                    )}
                                    <TextInput
                                        style={styles.inputStyle}
                                        value={values.passwordlength}
                                        onChangeText={handleChange('passwordlength')}
                                        placeholder='Ex. 8'
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={[styles.heading, { flex: 1 }]}>Add Lower Case</Text>

                                    <View style={styles.checkboxContainer}>
                                        <BouncyCheckbox
                                            useBuiltInState={false}
                                            isChecked={lowerCase}
                                            onPress={() => setLowerCase(!lowerCase)}
                                            fillColor="#29AB87"
                                            text=""                         // remove internal label
                                            style={{ padding: 0, margin: 0 }}      // remove extra spacing
                                            iconStyle={{ borderColor: '#29AB87', width: 20, height: 20 }}
                                            innerIconStyle={{ borderWidth: 2 }}
                                            size={20}
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={[styles.heading, { flex: 1 }]}>Add Upper Case</Text>

                                    <View style={styles.checkboxContainer}>
                                        <BouncyCheckbox
                                            useBuiltInState={false}
                                            isChecked={upperCase}
                                            onPress={() => setUpperCase(!upperCase)}
                                            fillColor="#29AB87"
                                            text=""
                                            style={{ padding: 0, margin: 0 }}
                                            iconStyle={{ borderColor: '#29AB87', width: 20, height: 20 }}
                                            innerIconStyle={{ borderWidth: 2 }}
                                            size={20}
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={[styles.heading, { flex: 1 }]}>Add Numbers</Text>

                                    <View style={styles.checkboxContainer}>
                                        <BouncyCheckbox
                                            useBuiltInState={false}
                                            isChecked={numbers}
                                            onPress={() => setnumbers(!numbers)}
                                            fillColor="#29AB87"
                                            text=""
                                            style={{ padding: 0, margin: 0 }}
                                            iconStyle={{ borderColor: '#29AB87', width: 20, height: 20 }}
                                            innerIconStyle={{ borderWidth: 2 }}
                                            size={20}
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputWrapper}>
                                    <Text style={[styles.heading, { flex: 1 }]}>Add Special Characters</Text>

                                    <View style={styles.checkboxContainer}>
                                        <BouncyCheckbox
                                            useBuiltInState={false}
                                            isChecked={symbol}
                                            onPress={() => setsymbol(!symbol)}
                                            fillColor="#29AB87"
                                            text=""
                                            style={{ padding: 0, margin: 0 }}
                                            iconStyle={{ borderColor: '#29AB87', width: 20, height: 20 }}
                                            innerIconStyle={{ borderWidth: 2 }}
                                            size={20}
                                        />
                                    </View>
                                </View>
                                <View style={styles.formActions}>
                                    <TouchableOpacity
                                        disabled={!isValid}
                                        style={styles.primaryBtn}
                                        onPress={() => {handleSubmit()}}
                                    ><Text style={styles.primaryBtnTxt}>Password Generate</Text></TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.secondaryBtn}
                                        onPress={() => {
                                            handleReset();
                                            resetPassword();
                                        }}
                                    ><Text style={styles.secondaryBtnTxt}>Reset</Text></TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                {IsPasswordGenerate ? (
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text style={styles.subTitle}>Result</Text>
                        <Text style={styles.description}>Long press to copy</Text>
                        <Text style={styles.generatedPassword}>{password}</Text>
                    </View>
                ) : null}
            </SafeAreaView>
        </ScrollView>
    )
}

export default App

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    formContainer: {
        margin: 8,
        padding: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 15,
        marginHorizontal: 40,
    },
    subTitle: {
        fontSize: 26,
        fontWeight: '600',
        marginBottom: 2,
    },
    description: {
        color: '#758283',
        marginBottom: 8,
    },
    heading: {
        fontSize: 15,
        // marginRight: 100,
    },
    inputWrapper: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn: {
        flexDirection: 'column',
    },
    inputStyle: {
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    errorText: {
        fontSize: 12,
        color: '#ff0d10',
    },
    formActions: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    primaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#5DA3FA',
    },
    primaryBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    secondaryBtn: {
        width: 120,
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: '#CAD5E2',
    },
    secondaryBtnTxt: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
        justifyContent: 'center',
        marginTop: 10,
    },
    card: {
        padding: 12,
        borderRadius: 6,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#ffffff',
        elevation: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    generatedPassword: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 12,
        color: '#000'
    },
    checkboxContainer: {
        width: 36,            // fixed small width so checkbox won't stretch
        alignItems: 'center',
        justifyContent: 'center',
    },
})