function introduction (name){
    return `Hi, my name is ${name}.`
}

function partyEntry(name,age){
    console.log(age >= 18? `Welcome ${name} have a good time`:'Access Denied!')
}

function introductionWithLanguage (name,language){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional (name,language="JavaScript"){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`
}