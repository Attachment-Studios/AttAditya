
function cross_change() {
	if (window.innerHeight > window.innerWidth) {
		image_box = document.getElementById('px-aditya');
		content_box = document.getElementById('content');
		anim_box = document.getElementById('adity-anim');
		pximg = document.getElementById('px-aditya-img');

		anim_box.style.height = '10%';
		anim_box.style.width = '100%';
		anim_box.style.top = '40%';
		anim_box.style.left = '0%';

		pximg.style.width = "auto";
		pximg.style.height = "100%";

		image_box.style.height = '40%';
		image_box.style.width = '100%';
		image_box.style.top = '0%';
		image_box.style.left = '0%';

		content_box.style.height = '47%';
		content_box.style.width = '96%';
		content_box.style.top = '50%';
		content_box.style.left = '2%';
	} else {
		image_box = document.getElementById('px-aditya');
		content_box = document.getElementById('content');
		anim_box = document.getElementById('adity-anim');
		pximg = document.getElementById('px-aditya-img');

		anim_box.style.height = '25%';
		anim_box.style.width = '50%';
		anim_box.style.top = '0%';
		anim_box.style.left = '50%';

		pximg.style.width = "100%";
		pximg.style.height = "auto";
		
		image_box.style.height = '100%';
		image_box.style.width = '50%';
		image_box.style.top = '0%';
		image_box.style.left = '0%';

		content_box.style.height = '72%';
		content_box.style.width = '45%';
		content_box.style.top = '25%';
		content_box.style.left = '50%';
	}
}

cross_change();
window.addEventListener('resize', () => {
	cross_change();
});

sim_a = "&#9398; &#9424; &#5039; &#8704; &#506; &#945; &#5609; @ &#570; &#8371; &ordf; &aring; &acirc; &#478;".split(" ");
sim_d = "&#9401; &#9427; &#5611; &#394; &#270; &#271; &#272; &#273; &eth; &#8706; &#8363; &#545; &#5798; &#5799;".split(" ");
sim_i = "&#9406; &#9432; &#8464; &#912; &#302; &#300; &iacute; &#943; &#906; &igrave; &#5029; &icirc; &#298; &#304;".split(" ");
sim_t = "&#9417; &#9443; &dagger; &#964; &#354; &#24178; &#12490; &#5055; &#5062; &#12486; &#8366; &#357; &#7786;".split(" ");
sim_y = "&#9422; &#9448; &#611; &#5033; &#5053; &#7822; &#7823; &#978; &#612; &#65509; &#1506; &#3062; &#4280;".split(" ");

function generateName() {
	let name = document.getElementById('aditya-name');

	let a = sim_a[Math.floor(Math.random() * sim_a.length)];
	let d = sim_d[Math.floor(Math.random() * sim_d.length)];
	let i = sim_i[Math.floor(Math.random() * sim_i.length)];
	let t = sim_t[Math.floor(Math.random() * sim_t.length)];
	let y = sim_y[Math.floor(Math.random() * sim_y.length)];
	let e = sim_a[Math.floor(Math.random() * sim_a.length)];

	name.innerHTML = (String(a) + String(d) + String(i) + String(t) + String(y) + String(e));
}

window.setInterval(() => {
	generateName();
}, 1000);

fetch("https://api.github.com/users/Attachment-Studios/repos?per_page=100").then(request => request.json()).then(data => {
	output = document.getElementById('projects-output');
	output_data = "";

	for ( let data_element of data ) {
		repo_name = data_element["name"].replaceAll('-', ' ');
		repo_url = data_element["has_pages"];
		if (String(repo_url) === "false") {
			repo_url = `https://github.com/Attachment-Studios/${data_element["name"]}`;
		} else {
			repo_url = `https://attachment-studios.github.io/${data_element["name"]}`;
		}
		if (repo_name.includes('.github.io')) {
			repo_name = repo_name.replaceAll(' ', '-');
		}

		__repo_name = "";
		for ( let ch_index in repo_name ) {
			if (String(ch_index) !== '0') {
				if (" -".includes(repo_name[ch_index - 1])) {
					__repo_name = __repo_name + repo_name[ch_index].toUpperCase();
				} else {
					__repo_name = __repo_name + repo_name[ch_index];
				}
			} else {
				__repo_name = __repo_name + repo_name[ch_index].toUpperCase();
			}
		}
		repo_name = __repo_name;

		if (!(repo_name.includes('  ') || repo_name.includes('--'))) {
			output_data = output_data + `<button onclick="window.open('${repo_url}');">${repo_name}</button>`;
		}
	}

	output.innerHTML = output_data;
});

fetch("certificates.json").then(request => request.json()).then(data => {
	output = document.getElementById('certificates-output');
	output_data = "";

	for ( let data_element of data ) {
		repo_name = data_element["name"]
		repo_url = data_element["url"];

		__repo_name = "";
		for ( let ch_index in repo_name ) {
			if (String(ch_index) !== '0') {
				if (" -".includes(repo_name[ch_index - 1])) {
					__repo_name = __repo_name + repo_name[ch_index].toUpperCase();
				} else {
					__repo_name = __repo_name + repo_name[ch_index];
				}
			} else {
				__repo_name = __repo_name + repo_name[ch_index].toUpperCase();
			}
		}
		repo_name = __repo_name;

		if (!(repo_name.includes('  ') || repo_name.includes('--'))) {
			output_data = output_data + `<button onclick="window.open('${repo_url}');">${repo_name}</button>`;
		}
	}

	output.innerHTML = output_data;
});

d = new Date;
my_age = Number(d.getFullYear()) - 2005
document.getElementById('fillup-age').innerHTML = `${my_age}`;

age_group = "(upcoming genius)"
if (my_age > 0 || my_age == 0) {
	age_group = 'Toddler';
}
if (my_age > 3) {
	age_group = 'Kid';
}
if (my_age > 12) {
	age_group = 'Teen';
}
if (my_age > 18) {
	age_group = 'Adult';
}
if (my_age > 200) {
	age_group = 'Immortal Person(If Alive)';
}

document.getElementById('fillup-age-grp').innerHTML = `${age_group}`;

