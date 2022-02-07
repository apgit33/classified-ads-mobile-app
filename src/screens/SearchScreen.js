import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { post, get, getHeaders, postPicture, postFormData } from '../api/fetch';
import { AuthContext, LogoURI } from '../config/config';
import { styles } from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { getCategories, postAd } from '../api/route';
import DropDownPicker from "react-native-custom-dropdown";
import * as ImagePicker from 'expo-image-picker';
import { Form, TextInput } from 'react-native-autofocus';

export const SearchScreen = ({ navigation, route }) => {
    // const { ad, body, rating } = route.params;
    const [step, setStep] = React.useState('');
    // const [city, setCity] = React.useState('');
    // const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [uploading, startUploading] = useState(false);
    const [description, setDescription] = React.useState('');
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [showCategory, setShowCategory] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [form, setForm] = React.useState({
        id: '',
        city: '',
        title: '',
        price: '',
        categories: [],
        picture: '',
        description: '',
        is_viewable: false,
    });
    const [categories, setCategories] = React.useState([]);
    const [selectedTeam, setSelectedTeam] = useState({})
    const [selectedCategories, setSelectedCategories] = useState([])

    function onChangeHandler(value, field) {
        const newForm = {...form, [field]: value };
        setForm(newForm);
    }

    const handleChange = (field) => {
        return (value) => setForm({ [field]: value });
    }
    console.log(form);
    // console.log(form);
    React.useEffect(() => {
        const fetchData = async () => {
            // const user = await SecureStore.getItemAsync('user');

            const result = await getCategories();

            setCategories(result.data);
        };

        fetchData();
    }, []);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        
        onChangeHandler(pickerResult, 'picture')
    }

    const getMimeType = (ext) => {
        // mime type mapping for few of the sample file types
        switch (ext) {
            case 'pdf': return 'application/pdf';
            case 'jpg': return 'image/jpeg';
            case 'jpeg': return 'image/jpeg';
            case 'png': return 'image/png';
        }
    }
    // startUploading(false);

    const addNew = async () => {
        const formData = new FormData();

        formData.append('title', form.title);
        formData.append('price', form.price);
        formData.append('description', form.description);
        formData.append('city', form.city);
        formData.append('categories', JSON.stringify(form.categories));
        formData.append('is_viewable', form.is_viewable);

        if(Object.keys(form.picture).length != 0) {
            console.log('rtyj');
            let filename = form.picture.uri.split('/').pop();
        
            const extArr = /\.(\w+)$/.exec(filename);
            const type = getMimeType(extArr[1]);
            startUploading(true);
            formData.append('picture', { uri: form.picture.uri, name: filename, type });
        }

        const response = postFormData('/api/ads', formData)

        startUploading(false);
        setStep(1)
        setForm({picture:'',categories:[1]})
        navigation.navigate('Home')
    };

    switch (step) { // TODO check navigation.push('InterventionScreen2) etc..
        case 1:
            return (
                <>
                <View style={styles.formContainer}>
                    <ScrollView>
                        <Text style={styles.title}>Déposer une annonce 1/2</Text>
                            <View style={styles.formRow}>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        name='city'
                                        style={styles.textInput}
                                        placeholder='City'
                                        value={form.city}
                                        onChangeText={(value) => onChangeHandler(value, 'city')}

                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        name='title'
                                        style={styles.textInput}
                                        placeholder='Title'
                                        value={form.title}
                                        onChangeText={(value) => onChangeHandler(value, 'title')}
                                    />
                                </View>
                            </View>
                            <View style={styles.formRow}>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder='Price'
                                        keyboardType='numeric'
                                        value={form.price}
                                        onChangeText={(value) => onChangeHandler(value, 'price')}
                                    />
                                </View>
                                <View style={styles.inputContainer}>
                                    {/* <TextInput
                                    style={styles.textInput}
                                    placeholder='category'
                                    value={form.category}
                                    onChangeText={(value) => onChangeHandler(value, 'category')}
                                /> */}

                                </View>


                            </View>
                    </ScrollView>
                    <>
                            <View style={styles.formRow}>
                                <DropDownPicker
                                    // zIndex={5000} 
                                    items={categories.map(item=> ({ label: item.item, value: item.id, icon: () => <Icon name={item.icon_name} size={18} color="#900" /> }))}
                                    placeholder="Select a category"
                                    multiple={true}
                                    multipleText="%d items have been selected."
                                    min={1}
                                    defaultValue={form.categories}
                                    isVisible={showCategory}
                                    onOpen={() => setShowCategory(true)}
                                    onClose={() => setShowCategory(false)}
                                    style={{ 
                                        borderTopLeftRadius: 12, 
                                        borderTopRightRadius: 12,
                                        borderBottomLeftRadius: 12, 
                                        borderBottomRightRadius: 12
                                    }}
                                    containerStyle={{ 
                                        height: 50,
                                        width: '50%',
                                    }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    onChangeItem={item => onChangeHandler(item, 'categories')}
                                />
                            </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapper}>
                                <TouchableOpacity onPress={() => setStep(2)} >
                                    <Icon name='long-arrow-right' color='#ED5940' size={60} />
                                </TouchableOpacity>
                                {/* <Button
                                    title="Suivant"
                                    onPress={() => {
                                        setStep(2)
                                    }}
                                /> */}
                            </View>
                        </View>
                    </>
                </View>
                </>
            )

        case 2:
            return (
                <ScrollView>
                    <Text style={styles.title}>Déposer une annonce 2/2</Text>
                    <View style={styles.formContainer}>
                        <View>
                            <View style={styles.inputContainer}>
                                <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                                    <Text style={styles.buttonText}>Pick a photo</Text>
                                </TouchableOpacity>
                                {form.picture == null ? <></> :      
                                    <View style={styles.container}>
                                        <Image
                                            source={{ uri: form.picture.uri }}
                                            style={styles.thumbnail}
                                        />
                                    </View>
                                }
                                </View>
                            <TextInput
                                style={styles.textArea}
                                multiline={true}
                                numberOfLines={6}
                                placeholder="description"
                                value={form.description}
                                onChangeText={(value) => onChangeHandler(value, 'description')}
                                />
                            <BouncyCheckbox
                                size={25}
                                fillColor='#ED5940'
                                // unfillColor="#FFFFFF"
                                text="Afficher votre téléphone sur l'annonce"
                                disableBuiltInState
                                isChecked={form.is_viewable}
                                // iconStyle={{ borderColor: 'grey' }}
                                textStyle={{ textDecorationLine: 'none' }}
                                onPress={() => { onChangeHandler(!form.is_viewable, 'is_viewable') }}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={() => setStep(1)} >
                                <Icon name='long-arrow-left' color='#ED5940' size={60} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonWrapper}>
                        <Button title="Upload" onPress={addNew} />
                        {/* { uploading ? <Text>Uploading</Text> :
                            <Button title="Upload" onPress={addNew} /> }
                            { <Button
                                title='Publish'
                                onPress={() => {
                                    addNew
                                    // postAd(form);
                                }}
                                color='#ED5940'
                            /> } */}
                        </View>
                    </View>
                </ScrollView>
            )

        default:
            setStep(1);
    }
}