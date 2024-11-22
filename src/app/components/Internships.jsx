// src/app/components/Internships.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

function Internships({ props }) {
  console.log("Rendering Internships component");

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Internships</h1>

        <div className="space-y-8">
          {props.map(internship => (
            <motion.div key={internship.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{internship.name}</h2>
                  <p className="text-xl text-gray-600">{internship.corporation}</p>
                  <p className="text-gray-500">{internship.date}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Project:</h3>
                  <p className="text-gray-600">{internship.project}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Details:</h3>
                  <p className="text-gray-600">{internship.details}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.features.map((feature, index) => (
                      <span key={index} className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Team:</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.team.map((member, index) => (
                      <span key={index} className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700">Position:</h3>
                  <p className="text-gray-600">{internship.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Internships;
