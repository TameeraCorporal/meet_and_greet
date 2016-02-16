var     express                 =   require("express"),
        app                     =   express(),
        bodyParser              =   require("body-parser"),
        mongoose                =   require("mongoose"),
        flash                   =   require("connect-flash"),
        expressSanitizer         =   require("express-sanitizer"),
        passport                =   require("passport"),
        methodOverride          =   require("method-override"),
        LocalStrategy           =   require("passport-local"),
        //User                    =   require("./models/user");
        passportLocalMongoose   =   require("passport-local-mongoose");
        
        mongoose.connect("mongodb://localhost/meet_greet");
        app.use(require("express-session")({
            secret: "This is where I want to be",
            resave: false,
            saveUninitialized: false
        }));
        
        app.set("view engine", "ejs");
        //app.use(express.static(_dirname + "/public"));
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(methodOverride("_method"));
        app.use(expressSanitizer());
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(flash());
        app.use(function(req,res,next){
            res.locals.currentUser = req.user;
            next();
        });
        
        // passport.use(new LocalStrategy(User.authenticate()));
        // passport.serializUser(User.serializeUser());
        // passport.deserializeUser(User.deserializeUser());
        
        app.get("/", function(req,res){
            res.render("home");
        });
        
        app.listen(process.env.PORT, process.env.IP, function(){
            console.log("Meet & Greet Server Started!");
        });
        