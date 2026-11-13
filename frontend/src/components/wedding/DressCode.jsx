
import { motion } from "framer-motion";
import { DRESS_CODE } from "../../data/weddingData";
import { SectionHeading } from "./shared";

export const DressCode = () => (
  <section
    id="dresscode"
    className="relative section-pad bg-[#FFFAF8]"
    data-testid="dresscode-section"
  >
    <div className="max-w-7xl mx-auto px-6">

      <SectionHeading
        eyebrow="Dress To Impress"
        title="Wedding Dress Code"
        subtitle="Celebrate our special moments in beautiful coordinated colours."
      />

      <div className="grid md:grid-cols-2 gap-7">

        {DRESS_CODE.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-[#E8D6C5] bg-white shadow-sm hover:shadow-lg transition-shadow"
            data-testid={`dresscode-${event.id}`}
          >

            {/* Event Header */}
            <div
              className="px-6 py-5 text-center border-b border-[#F0E4D9]"
              style={{
                backgroundColor: `${event.accent}12`,
              }}
            >
              <h3
                className="font-heading text-2xl md:text-3xl font-medium"
                style={{ color: event.accent }}
              >
                {event.event}
              </h3>

              {event.date && (
                <p className="text-sm text-[#777] mt-2">
                  {event.date}
                  {event.time && ` · ${event.time}`}
                </p>
              )}
            </div>

            {/* Categories */}
            <div className="p-6">

              <div
                className={`grid gap-5 ${
                  event.categories.length > 1
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >

                {event.categories.map((category) => (
                  <div
                    key={category.id}
                    className="min-w-0 text-center"
                  >

                    {/* Category Heading */}
                    <div
                      className="rounded-full px-3 py-2 mb-3"
                      style={{
                        backgroundColor: `${event.accent}18`,
                      }}
                    >
                      <h4 className="font-heading text-lg font-semibold text-[#542D2D]">
                        {category.title}
                      </h4>
                    </div>

                    {/* Outfit Description */}
                    <p className="text-sm text-[#595959] font-medium mb-5">
                      {category.outfit}
                    </p>

                    {/* Colour Swatches */}
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-5">

                      {category.colors.map((color) => (
                        <motion.div
                          key={color.hex}
                          whileHover={{ scale: 1.08, y: -3 }}
                          className="flex flex-col items-center gap-2 w-[75px]"
                        >

                          <div
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#E8E1DC] shadow-inner"
                            style={{
                              backgroundColor: color.hex,
                            }}
                            title={`${color.name} - ${color.hex}`}
                          />

                          <span className="text-xs font-medium text-[#403535] text-center leading-tight">
                            {color.name}
                          </span>

                          <span className="text-[10px] text-[#999] font-mono">
                            {color.hex}
                          </span>

                        </motion.div>
                      ))}

                    </div>
                  </div>
                ))}

              </div>

              {/* Single Colour / Combination Note */}
              <div
                className="mt-7 rounded-2xl px-4 py-4 text-center border"
                style={{
                  backgroundColor: `${event.accent}10`,
                  borderColor: `${event.accent}35`,
                }}
              >
                <p className="text-sm text-[#594444] leading-relaxed">
                  <span className="mr-2">🎨</span>
                  {event.note}
                  {["mataji", "haldi"].includes(event.id) && (
                    <span className="ml-1">💚</span>
                  )}
                </p>
              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* Closing Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 text-center"
      >
        <p className="font-heading text-xl md:text-2xl text-[#800000]">
          Let's celebrate together in style! ❤️
        </p>

        <p className="text-sm text-[#777] mt-2">
          Your presence and blessings mean everything to us.
        </p>
      </motion.div>

    </div>
  </section>
);
