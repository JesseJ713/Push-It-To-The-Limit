const router = require("express").Router();
const { db } = require("../models/workoutSchema");
const Workout = require("../models/workoutSchema");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/range", (req, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } })
        .then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) =>
    res.json(err));
});

module.exports = router;