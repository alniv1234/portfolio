<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use Inertia\Inertia;
use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Resources\SkillResource;
use App\Models\Project;

class PortfolioController extends Controller
{
    public function portfolio(){
        $skills = SkillResource::collection(Skill::all());
        $projects =ProjectResource::collection(Project::with('skill')->get());


        return Inertia::render('Welcome', compact('skills', 'projects'));
    }
}
