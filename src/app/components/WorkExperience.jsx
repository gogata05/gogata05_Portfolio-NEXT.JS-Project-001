"use client";
import React from "react";
import { motion } from "framer-motion";

function WorkExperience({ props }) {
  console.log("Rendering WorkExperience component with identical styles to Internships. Props:", props);

  if (!props || props.length === 0) {
    console.log("No work experience data provided to WorkExperience component.");
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center py-10 px-4">
        <div className="text-center">
          {/* Consistent empty state styling with Internships if it had one, or a simple message */}
          <h2 className="text-2xl font-semibold text-gray-700">No Work Experience To Display</h2>
          <p className="mt-2 text-md text-gray-500">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto py-10 px-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-8 text-center text-gray-800">
          Work Experience
        </motion.h1>

        <div className="space-y-8">
          {props.map((experience, index) => (
            <motion.div
              key={experience.id || `exp-${index}`} // Fallback key if id is not present
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} // Ensures animation triggers when element is somewhat in view
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-3xl font-bold text-gray-400 mr-4 select-none">{experience.number || String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{experience.name || "N/A"}</h2>
                    <p className="text-xl text-gray-600">{experience.corporation || "N/A"}</p>
                    <p className="text-sm text-gray-500 mt-1">{experience.date || "N/A"}</p>
                  </div>
                </div>

                {/* Details Section - Adapted from Project Section in Internships for consistency */}
                <div>
                  <h3 className="font-semibold text-gray-700">Details:</h3>
                  <p className="text-gray-600 whitespace-pre-line">{experience.details || "No details provided."}</p>
                </div>

                {/* Features Section */}
                {experience.features && experience.features.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-700">Features:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.features.map((feature, featureIndex) => (
                        <span key={`feature-${index}-${featureIndex}`} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Section */}
                {experience.team && experience.team.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-700">Team:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.team.map((member, memberIndex) => (
                        <span key={`team-${index}-${memberIndex}`} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Position Section */}
                <div>
                  <h3 className="font-semibold text-gray-700">Position:</h3>
                  <p className="text-gray-600">{experience.position || "N/A"}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
