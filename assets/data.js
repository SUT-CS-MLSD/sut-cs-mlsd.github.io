/* Curated from the supplied course files and head TA corrections. */
window.COURSE = {
  name: 'Machine Learning Systems Design', code: 'CS 22-193', semester: 'Fall 2025',
  materialsBase: 'https://raw.githubusercontent.com/SUT-CS-MLSD/MLSD-Fall2025/main/files/',
  scheduleUrl: 'https://docs.google.com/spreadsheets/d/1yfp1IaPnOoakKOlB-a71vzzIUPCjp6ITgv4uey_yHFA/edit?gid=29820464#gid=29820464',
  lectures: [
    {id:'01',title:'Introduction',group:'Foundations',description:'The ML system lifecycle, course roadmap, and the gap between a trained model and a working product.',file:'Lec1-Introduction (1).pdf',pages:19},
    {id:'02',title:'Understanding ML production',group:'Foundations',description:'Frame the problem, define success, and understand the requirements of production machine learning.',file:'Lec2-Understanding ML production.pdf',pages:28},
    {id:'03',title:'ML & data systems fundamentals',group:'Foundations',description:'The foundations that connect machine learning, data systems, and infrastructure.',file:'Lec3-ML and Data Systems Fundamentals.pdf',pages:45},
    {id:'04',title:'Fundamentals of data engineering',group:'Data & modeling',description:'Build the data foundations that machine learning systems depend on.',file:'Lec4-Fundamentals of Data Engineering (1).pdf',pages:59},
    {id:'05',title:'Data issues & preprocessing',group:'Data & modeling',description:'Understand data quality, prepare datasets, and build reliable preprocessing workflows.',file:'Lec5-Data issues and preprocessing.pdf',pages:96},
    {id:'06',title:'Feature engineering',group:'Data & modeling',description:'Transform raw data into useful representations for learning.',file:'Lec6-feature_engineering.pdf',pages:81},
    {id:'07',title:'Model selection, development & training',group:'Data & modeling',description:'Choose, develop, and train models within the constraints of an ML system.',file:'Lec7-model_selection_.developement_training.pdf',pages:80},
    {id:'08',title:'Offline evaluation',group:'Data & modeling',description:'Evaluate models before deployment and connect evaluation choices to the problem.',file:'Lec8-Offline_evaluation.pdf',pages:38},
    {id:'09',title:'Deployment, serving, edge & batch',group:'Production',description:'Move models into use through serving architectures, edge deployment, and batch prediction.',file:'Lec9-Deployment_Serving_Edge_Batch.pdf',pages:22},
    {id:'10',title:'Deployment & model compression',group:'Production',description:'Understand model compression and the tradeoffs involved in efficient inference.',file:'Lec10-Deployment-Compression.pdf',pages:25},
    {id:'12',title:'ML failures & monitoring',group:'Production',description:'Diagnose failures, detect distribution shifts, and monitor deployed systems.',file:'Lec12-ML_failure_Monitoring.pdf',pages:97},
    {id:'S1',title:'Interpretability',group:'Beyond accuracy',description:'Make model behavior understandable and examine the role of explanations.',file:'Interpretability.pdf',pages:13,supplement:true},
    {id:'S2',title:'Beyond test-set accuracy',group:'Beyond accuracy',description:'Supplementary slides by Sara Hooker on what matters beyond a model’s benchmark score.',file:'deployment_beyond_test_set_accuracy_sara_hooker.pdf',pages:86,supplement:true},
    {id:'R',title:'Chapters 1–7 · Review',group:'Review',description:'The course review deck revisiting the first seven chapters.',file:'review_chapter1-7.pptx',format:'PPTX',supplement:true}
  ],
  assignments: [
    {id:'01',title:'Data to decisions',subtitle:'Homework 1 · Theory & practice',description:'Practice the fundamentals of data preparation, feature engineering, and model evaluation through two hands-on learning pipelines.',zip:'CS-MLSD-HW1-edited.zip',size:'818 KB',brief:'assignments/hw1/MLSD_HW1_edited.pdf',release:'23 Aban 1404',deadline:'7 Azar 1404',deadlineNote:'The supplied revised brief allows late submission until 10 Azar.',topics:['Data preprocessing','Feature engineering','Cross-validation'],notebooks:[{title:'Emotion detection in Persian texts',file:'assignments/hw1/Twitter.ipynb',description:'Build a five-class emotion classifier with a reusable text-processing pipeline.'},{title:'The Whispering Blight of Eldoria',file:'assignments/hw1/whispering_blight_of_eldoria.ipynb',description:'Engineer tabular features and predict outcomes with stratified cross-validation.'}]},
    {id:'02',title:'From training to serving',subtitle:'Homework 2 · Theory & practice',description:'Explore deployment tradeoffs, distributed training, and model serving. Put a pretrained classifier behind a REST API.',zip:'CS-MLSD-HW2 (4).zip',size:'47 MB',brief:'assignments/hw2/CS-MLSD-HW2.pdf',release:'13 Dey 1404',deadline:'19 Bahman 1404',deadlineNote:'Extended deadline announced on 17 Bahman. The original brief lists 26 Dey.',topics:['Distributed training','TensorFlow Serving','Model compression'],notebooks:[{title:'Distributed strategies with TF & Keras',file:'assignments/hw2/HW2_Assignment_Distributed_Training.ipynb',description:'Move from a single worker to MultiWorkerMirroredStrategy.'},{title:'Serve a model with TensorFlow Serving',file:'assignments/hw2/HW2_Assignment_TFS.ipynb',description:'Export a SavedModel and run image predictions through a local REST endpoint.'}]}
  ],
  projects: [
    {id:'01',title:'Phase one',date:'16 Azar 1404',url:'https://docs.google.com/document/d/1Mvh74gHymHs-2dVkvZtjuNzKtwp2L7HKvNFUSurlcaI'},
    {id:'02',title:'Phase two',date:'29 Bahman 1404',url:'https://docs.google.com/document/d/1S85XDRSG5_9l0dziQQCABhK_LwZIhWQtlzrSJpVu7Dk/edit?usp=sharing'}
  ],
  team: [
  {
    "name": "Dr. Fatemeh Seyyedsalehi",
    "fa": "دکتر فاطمه سیدصالحی",
    "role": "Course lecturer",
    "initials": "FS",
    "image": "Fatemeh Seyyedsalehi.png",
    "website": "http://math.sharif.ir/faculties/seyyedsalehi",
    "lead": true
  },
  {
    "name": "Pooriya Safaei",
    "fa": "پوریا صفائی",
    "role": "Head teaching assistant",
    "initials": "PS",
    "image": "Pooriya Safaei.jpeg",
    "telegram": "PooriyaSafaei",
    "email": "pooriya.safaei.80@gmail.com",
    "github": "https://github.com/pooriyasafaei",
    "lead": true
  },
  {
    "name": "Sina Daneshgar",
    "fa": "سینا دانشگر",
    "role": "Teaching assistant",
    "initials": "SD",
    "image": "Sina Daneshgar.jpeg",
    "telegram": "DaneshgarSina",
    "email": "DaneshgarSina@gmail.com"
  },
  {
    "name": "Sorush Saghari",
    "fa": "سروش ساغری",
    "role": "Teaching assistant",
    "initials": "SS",
    "image": "Sorush Saghari.jpg",
    "telegram": "sorush_sa",
    "email": "sorush9saghari@gmail.com",
    "note": "Data & Ray Serve tutorials"
  },
  {
    "name": "Iliya Farzi",
    "fa": "ایلیا فرضی",
    "role": "Teaching assistant · Guest lecturer",
    "initials": "IF",
    "image": "Iliya Farzi.jpg",
    "telegram": "ilia0017",
    "email": "iliafarzi17@gmail.com",
    "note": "Guest lecturer for the final sessions"
  },
  {
    "name": "Sara Karimi",
    "fa": "سارا کریمی",
    "role": "Teaching assistant",
    "initials": "SK",
    "telegram": "s4rrkar"
  },
  {
    "name": "Mohammad Mohammadi",
    "fa": "محمد محمدی",
    "role": "Teaching assistant",
    "initials": "MM",
    "image": "Mohammad Mohammadi.jpeg"
  },
  {
    "name": "Morteza Shahrabi Farahani",
    "fa": "مرتضی شهرابی فراهانی",
    "role": "Teaching assistant",
    "initials": "MS",
    "image": "Morteza Shahrabi Farahani.jpg",
    "telegram": "moshfa1",
    "email": "morteza.shahrabii@gmail.com",
    "github": "https://github.com/morteza-shahrabi-farahani"
  },
  {
    "name": "Maryam Rezaee",
    "fa": "مریم رضائی",
    "role": "Teaching assistant",
    "initials": "MR",
    "image": "Maryam Rezaei.jpg",
    "telegram": "msmrexe",
    "email": "ms.maryamrezaee@gmail.com"
  },
  {
    "name": "Mostafa Abdolmaleki",
    "fa": "مصطفی عبدالملکی",
    "role": "Teaching assistant",
    "initials": "MA",
    "telegram": "MostafaOC"
  }
],
  schedule:[
    ['1404/07/20','Introduction','Lecture','01'],
    ['1404/07/27','Understanding machine learning production','Lecture','02'],
    ['1404/07/29','ML and data systems fundamentals','Lecture','03'],
    ['1404/08/04','Fundamentals of data engineering','Lecture','04'],
    ['1404/08/06','Data issues and data preprocessing','Lecture','05'],
    ['1404/08/11','Data issues and data preprocessing','Lecture','05'],
    ['1404/08/13','Feature engineering','Lecture','06'],
    ['1404/08/18','Feature engineering','Lecture','06'],
    ['1404/08/20','Data tutorial · Sorush Saghari','Tutorial',null,'HW1'],
    ['1404/08/25','Model selection, development, and training','Lecture','07'],
    ['1404/08/27','Model selection, development, and training','Lecture','07'],
    ['1404/09/02','Offline evaluation','Lecture','08'],
    ['1404/09/04','Deployment and serving','Lecture','09'],
    ['1404/09/09','Deployment and serving','Lecture','09'],
    ['1404/09/11','Deployment and serving','Lecture','10'],
    ['1404/09/16','ML system failures & data distribution shifts','Lecture','12','Project phase 1'],
    ['1404/09/18','Ray Serve tutorial · Sorush Saghari','Tutorial'],
    ['1404/09/23','ML system failures & data distribution shifts','Lecture','12'],
    ['1404/09/25','Monitoring & test in deployment','Lecture','12'],
    ['1404/09/30','Agentic AI project tutorial · Iliya Farzi','Tutorial'],
    ['1404/10/02','ML beyond accuracy: interpretability','Lecture','S1'],
    ['1404/10/07','Agentic AI project tutorial · Iliya Farzi','Tutorial'],
    ['1404/10/09','ML beyond accuracy','Lecture','S2','HW2'],
    ['1404/10/14','Chapters 1–7 review','Review','R'],
    ['1404/10/21','Weights & Biases and WhyLogs tutorial · Iliya Farzi','Tutorial'],
    ['1404/10/23','Project phase 2 (original plan)','Project']
  ],
  resources:[
    {type:'CORE TEXTBOOK',title:'Designing Machine Learning Systems',author:'Chip Huyen',description:'An Iterative Process for Production-Ready Applications. The main textbook listed in the introductory lecture.',url:'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',color:'green'},
    {type:'RELATED COURSE',title:'Stanford CS329S',author:'Machine Learning Systems Design',description:'A companion course referenced in the syllabus, with an emphasis on designing production ML systems.',url:'https://stanford-cs329s.github.io/index.html#overview',color:'sand'},
    {type:'RELATED COURSE',title:'Machine Learning in Production',author:'DeepLearning.AI',description:'Production-oriented learning material linked in the course introduction.',url:'https://www.deeplearning.ai/courses/machine-learning-in-production/',color:'blue'}
  ]
};
