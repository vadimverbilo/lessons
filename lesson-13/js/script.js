let lastName = prompt ('What is Your last name?', ''),
		firstName = prompt ('What is Your first name?', ''),
		gender = confirm ('Your gender is male?\nMale (ОК);\nFemale (Отмена):');

		if (gender === true) {
			gender = 'male';
		} else {
			gender = 'female';
		};

		let age = prompt('How old are you?', '');

		if (gender === 'male' && age >= 65 || gender === 'female' && age >= 60) {
			age = 'YES';
	 	} else { 
			age = 'NO';
		};

 	alert (`Your last name is: ${lastName}\nYour first name is: ${firstName}\nYour gender is: ${gender}\nYou are a pensioner: ${age}`);